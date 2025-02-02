// import { WatchBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/WatchBottomSheet.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { AnimeWatchSheet } from "@features/animes/components/AnimeWatchSheet/AnimeWatchSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import clsx from "clsx";
import { FC, useState } from "react";
import styles from "./AnimeWatchContainer.module.css";
import { HentaiWatchSheet } from "@features/animes/components/HentaiWatchSheet/HentaiWatchSheet.tsx";
import { UserRateSheet } from "@features/animes/components/UserRateSheet/UserRateSheet.tsx";
interface IWatchButtonProps {
	anime: IAnime;
}
export const AnimeWatchContainer: FC<IWatchButtonProps> = ({ anime }) => {
	const [isWatchSheetOpen, setIsWatchSheetOpen] = useState(false);
	const [isUserRateSheetOpen, setIsUserRateSheetOpen] = useState(false);
	const isHentai = anime.genres.some((genre) => genre.name === "Hentai");

	const onUserRateClick = () => {
		setIsUserRateSheetOpen(true);
	};

	console.log({ isHentai, isWatchSheetOpen });

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
					onClick={onUserRateClick}
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
				>
					{/* <BookmarkEditIcon /> */}
					<span>Add to</span>
				</Button>
			) : (
				<Button
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
					variant="outline"
					onClick={onUserRateClick}
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
			{isHentai && (
				<HentaiWatchSheet
					isShow={isWatchSheetOpen}
					onOutsideClick={() => setIsWatchSheetOpen(false)}
					anime={anime}
				/>
			)}

			<UserRateSheet
				anime={anime}
				isShow={isUserRateSheetOpen}
				onOutsideClick={() => setIsUserRateSheetOpen(false)}
			/>
		</div>
	);
};
