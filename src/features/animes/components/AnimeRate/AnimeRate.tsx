import { getEpisodesOptions } from "@/shared/utils/getEpisodesElements.ts";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { Select } from "@components/ui/Select/Select.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { useUpdateUserRate } from "@features/userRates/api/updateUserRate/updateUserRate.api.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { FC, useState } from "react";
import styles from "./AnimeRate.module.css";
import { Input } from "@components/ui/Input/Input.tsx";
import { Button } from "@components/ui/Button/Button.tsx";

const statuses: IUserRateStatus[] = ["watching", "planned", "completed", "on_hold", "dropped"];

interface IAnimeRateProps {
	anime: IAnime;
}
export const AnimeRate: FC<IAnimeRateProps> = ({ anime }) => {
	const [text, setText] = useState(anime.userRate?.text || "");
	const episodeOptions = getEpisodesOptions(anime.episodes || anime.episodesAired);
	const defaultEpisodeValue = episodeOptions.find(
		(option) => Number(option.value) === (anime.userRate?.episodes || 0),
	);

	const statusOptions = statuses.map((status) => ({
		value: status,
		label: status,
	}));
	const defaultStatusValue = statusOptions.find(
		(option) => option.value === (anime.userRate?.status || "watching"),
	);

	const { mutate: updateUserRate } = useUpdateUserRate();
	console.log({ anime, defaultValue: defaultEpisodeValue });

	const onEpisodesSelectChange = (newValue: typeof defaultEpisodeValue | null) => {
		if (!newValue) return;
		updateUserRate({ userRateId: anime.userRate?.id || 0, episodes: Number(newValue.value) });
	};

	const onStatusSelectChange = (newValue: typeof defaultEpisodeValue | null) => {
		if (!newValue) return;
		updateUserRate({
			userRateId: anime.userRate?.id || 0,
			status: newValue.value as IUserRateStatus,
		});
	};

	const saveText = () => {
		updateUserRate({
			userRateId: anime.userRate?.id || 0,
			text,
		});
	};

	// anime.userRate.
	// const {} = useGetUserRates({ variables: { userId: 1, animeId: anime.id } });

	return (
		<HeadingSection title="Rate">
			<div className={styles.anime_rate_content}>
				<div style={{ display: "flex", gap: "8px" }}>
					<Select
						defaultValue={defaultEpisodeValue}
						options={episodeOptions}
						onChange={(n) => onEpisodesSelectChange(n)}
					/>
					<Select
						defaultValue={defaultStatusValue}
						options={statusOptions}
						onChange={(n) => onStatusSelectChange(n)}
					/>
				</div>
				<Input
					value={text}
					onChange={setText}
					rightSlot={<Button onClick={saveText}>Save</Button>}
					onSubmit={saveText}
					classNames={{ input: styles.text_input, form: styles.text_input }}
				/>
			</div>
		</HeadingSection>
	);
};
