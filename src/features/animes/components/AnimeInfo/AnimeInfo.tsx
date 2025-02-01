import { parseShikimoriText } from "@/shared/utils/parseShikimoriText.ts";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC, useState } from "react";
import styles from "./AnimeInfo.module.css";

interface IAnimeInfoProps {
	anime: IAnime;
}

export const AnimeInfo: FC<IAnimeInfoProps> = ({ anime }) => {
	const [descriptionBottomSheet, setDescriptionBottomSheet] = useState(false);

	const toggleDescriptionBottomSheet = () => {
		setDescriptionBottomSheet((prev) => !prev);
	};

	return (
		<div className={styles.anime_info}>
			<ImageView
				src={anime.poster.mainUrl}
				full={anime.poster.originalUrl}
				className={styles.poster}
				allowFullscreen
				loading="eager"
			/>
			<div className={styles.subinfo}>
				<Typography weight="title" size="title">
					{anime.name}
				</Typography>
				<Typography>{anime.russian}</Typography>
				{anime?.description?.length > 0 && (
					<>
						<Divider orientation="horizontal" />
						<div
							className={styles.description}
							onClick={toggleDescriptionBottomSheet}
							dangerouslySetInnerHTML={{
								__html: parseShikimoriText(anime.description),
							}}
						/>
					</>
				)}
			</div>

			<BottomSheet
				isShow={descriptionBottomSheet}
				title="Description"
				onOutsideClick={toggleDescriptionBottomSheet}
			>
				<div dangerouslySetInnerHTML={{ __html: parseShikimoriText(anime.description) }}></div>
			</BottomSheet>
		</div>
	);
};
