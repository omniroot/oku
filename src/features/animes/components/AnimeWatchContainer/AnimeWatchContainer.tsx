// import { WatchBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/WatchBottomSheet.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { AnimeWatchSheet } from "@features/animes/components/AnimeWatchSheet/AnimeWatchSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import clsx from "clsx";
import { FC, useState } from "react";
import styles from "./AnimeWatchContainer.module.css";
interface IWatchButtonProps {
	anime: IAnime;
}
export const AnimeWatchContainer: FC<IWatchButtonProps> = ({ anime }) => {
	const [isWatchSheetOpen, setIsWatchSheetOpen] = useState(false);
	// const [userRateEditBottomSheetOpen, setUserRateEditBottomSheetOpen] = useState(false);
	// const isHentai = anime.genres.some((genre) => genre.name === "Hentai");

	const onUserRateAddClick = () => {
		// setUserRateEditBottomSheetOpen((prev) => !prev);
	};

	const onUserRateEditClick = () => {
		// setUserRateEditBottomSheetOpen((prev) => !prev);
	};

	return (
		<div className={styles.anime_watch_container}>
			<Button
				className={styles.watch_button}
				variant="outline"
				onClick={() => setIsWatchSheetOpen(true)}
			>
				Watch
			</Button>
			{!anime.userRate ? (
				<Button
					variant="outline"
					onClick={onUserRateAddClick}
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
				>
					{/* <BookmarkEditIcon /> */}
					<span>Add to</span>
				</Button>
			) : (
				<Button
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
					variant="outline"
					onClick={onUserRateEditClick}
				>
					<div className={styles.user_rate_edit_content}>
						{/* <BookmarkEditIcon /> */}
						<span>{anime.userRate.episodes}</span>
						<Divider orientation="vertical" spacing />
						<span>{anime.userRate.status}</span>
					</div>
				</Button>
			)}

			<AnimeWatchSheet
				isShow={isWatchSheetOpen}
				onOutsideClick={() => setIsWatchSheetOpen(false)}
				anime={anime}
			/>

			{/* <AnimatePresence>
				{userRateEditBottomSheetOpen && (
					<UserRateEditBottomSheet anime={anime} onOutsideClick={onUserRateEditClick} />
				)}
				{watchBottomSheetOpen && (
					<>
						{isHentai ? (
							<HentaiBottomSheet anime={anime} onOutsideClick={onWatchButtonClick} />
						) : (
							<BottomSheet onOutsideClick={onWatchButtonClick}>
								<span>Animewatch player in refactoring...</span>
							</BottomSheet>
							// <WatchBottomSheet anime={anime} onOutsideClick={onWatchButtonClick} />
						)}
					</>
				)}
			</AnimatePresence> */}
		</div>
	);
};
