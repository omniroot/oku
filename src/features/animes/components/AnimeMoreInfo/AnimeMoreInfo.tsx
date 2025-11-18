import { ListView } from "@components/ui/ListView/ListView.tsx";
import type { IAnime } from "@features/animes/api/anime.interface.ts";
import type { FC } from "react";
import styles from "./AnimeMoreInfo.module.css";

const getColorByScore = (score: number) => {
	const colorMap = {
		"очень плохо": "#FFCCCC", // Красный
		плохо: "#FF9999", // Светло-красный
		нормально: "#FFFF99", // Желтый
		хорошо: "#99FF99", // Светло-зеленый
		отлично: "#99FFCC", // Очень светло-зеленый
	};

	// Определяем цвет в зависимости от оценки
	if (score < 3) {
		return colorMap["очень плохо"];
	} else if (score < 5) {
		return colorMap["плохо"];
	} else if (score < 7) {
		return colorMap["нормально"];
	} else if (score < 9) {
		return colorMap["хорошо"];
	} else {
		return colorMap["отлично"];
	}
};

interface IAnimeMoreInfoProps {
	anime: IAnime;
}
export const AnimeMoreInfo: FC<IAnimeMoreInfoProps> = ({ anime }) => {
	return (
		<ListView orientation="horizontal" className={styles.anime_more_info}>
			<div className={styles.element}>
				<span className={styles.title}>Skikimiori</span>
				<span className={styles.content} style={{ color: getColorByScore(anime.score) }}>
					{anime.score}
				</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Episodes</span>
				<span className={styles.content}>{anime.episodes || anime.episodesAired}</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Duration</span>
				<span className={styles.content}>{anime.duration}</span>
			</div>
		</ListView>
	);
};
