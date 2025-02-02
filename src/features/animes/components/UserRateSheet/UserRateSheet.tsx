import { IAnime } from "@features/animes/api/anime.interface.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { FC, useState } from "react";
import styles from "./UserRateSheet.module.css";
import { ISelectOption, Select } from "@components/ui/Select/Select.tsx";
import { TrashIcon } from "@/shared/assets/icons/TrashIcon.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useUpdateUserRate } from "@features/userRates/api/updateUserRate/updateUserRate.api.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { useAddUserRate } from "@features/userRates/api/addUserRate/addUserRate.api.ts";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { Dialog } from "@components/ui/Dialog/Dialog.tsx";
import { useDeleteUserRate } from "@features/userRates/api/deleteUserRate/deleteUserRate.api.ts";

const getEpisodesSelectElements = (maxEpisodes: number) => {
	const elements = Array.from({ length: maxEpisodes }, (_, i) => ({
		value: String(i + 1),
		label: String(i + 1),
	}));

	return elements;
};

const getStatusSelectElement = (status: string) => {
	return (
		statusSelectElements.find((el) => el.value === status) ||
		({ label: "", value: "" } as ISelectOption)
	);
};

const getEpisodeSelectElement = (episode: number) => {
	return {
		label: String(episode),
		value: String(episode),
	};
};

const statusSelectElements: ISelectOption[] = [
	{ value: "watching", label: "Watching" },
	{ value: "completed", label: "Completed" },
	{ value: "on_hold", label: "On Hold" },
	{ value: "dropped", label: "Dropped" },
	{ value: "planned", label: "Planned" },
];

interface IUserRateEditBottomSheetProps {
	anime: IAnime;
	isShow: boolean;
	onOutsideClick: () => void;
}

export const UserRateSheet: FC<IUserRateEditBottomSheetProps> = ({
	anime,
	isShow,
	onOutsideClick,
}) => {
	const client = useQueryClient();
	const { userId } = useAuth();
	const isExistInUserRate = anime.userRate ? true : false;
	const [isDeleteDialogShow, setIsDeleteDialogShow] = useState(false);
	const episodesSelectElements = getEpisodesSelectElements(
		anime.episodes || anime.episodesAired || 1,
	);
	const [episodeElement, setEpisodeElement] = useState(
		getEpisodeSelectElement(anime.userRate?.episodes || 1),
	);
	const [statusElement, setStatusElement] = useState(
		getStatusSelectElement(anime.userRate?.status || "watching"),
	);

	const onQuerySuccess = () => {
		const getAnimeQueryKeys = useGetAnimes.getKey({ animeId: String(anime.id) });
		client.refetchQueries({ queryKey: getAnimeQueryKeys });
		onOutsideClick();
	};

	const { mutate: addUserRate } = useAddUserRate({
		onSuccess: onQuerySuccess,
	});
	const { mutate: updateUserRate } = useUpdateUserRate({
		onSuccess: onQuerySuccess,
	});

	const { mutate: deleteUserRate } = useDeleteUserRate({
		onSuccess: onQuerySuccess,
	});

	const onSaveButtonClick = () => {
		// add new user rate
		if (!isExistInUserRate) {
			addUserRate({
				user_id: Number(userId),
				target_id: Number(anime.id),
				target_type: "Anime",
				episodes: String(episodeElement.value),
				status: statusElement.value as IUserRateStatus,
			});
			return;
		}
		updateUserRate({
			userRateId: anime.userRate?.id || 0,
			episodes: Number(episodeElement.value),
			status: statusElement.value as IUserRateStatus,
		});
	};

	const onDeleteButtonClick = () => {
		deleteUserRate({ rate_id: anime.userRate?.id || 0 });
		setIsDeleteDialogShow(true);
	};

	if (!anime) return;
	return (
		<BottomSheet
			isShow={isShow}
			title={isExistInUserRate ? "Edit user rate" : "Add user rate"}
			onOutsideClick={onOutsideClick}
		>
			<div className={styles.user_rate_edit_container}>
				<div className={styles.selects}>
					<Select
						options={episodesSelectElements}
						defaultValue={episodeElement}
						onChange={(newValue) => setEpisodeElement(newValue || { label: "", value: "" })}
					/>
					<Select
						options={statusSelectElements}
						defaultValue={statusElement}
						onChange={(newValue) => setStatusElement(newValue as ISelectOption)}
					/>
				</div>
				<div className={styles.actions} data-isexist={isExistInUserRate}>
					{isExistInUserRate && (
						<Button
							onClick={() => setIsDeleteDialogShow(true)}
							className={styles.delete_button}
							variant="outline"
						>
							<TrashIcon />
							<Typography>Delete</Typography>
						</Button>
					)}
					<Button variant="primary" className={styles.save_button} onClick={onSaveButtonClick}>
						<Typography>{isExistInUserRate ? "Save" : "Add"}</Typography>
					</Button>
				</div>
			</div>
			<Dialog
				isShow={isDeleteDialogShow}
				title="Delete user rate"
				description="Are you sure you want to delete this user rate?"
				onSubmit={onDeleteButtonClick}
				submitText="Delete"
				onCancel={() => setIsDeleteDialogShow(false)}
			/>
		</BottomSheet>
	);
};
