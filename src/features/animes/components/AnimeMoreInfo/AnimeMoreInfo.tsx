import styles from "./AnimeMoreInfo.module.css";
import { FC } from "react";
import { motion } from "motion/react";
import { IAnime } from "@features/animes/api/anime.interface.ts";

interface IAnimeMoreInfoProps {
	anime: IAnime;
}
export const AnimeMoreInfo: FC<IAnimeMoreInfoProps> = ({ anime }) => {
	return (
		<motion.div className={styles.anime_more_info} initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
			<div className={styles.element}>
				<span className={styles.title}>Skikimiori</span>
				<span className={styles.content}>{anime.score}</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Episodes</span>
				<span className={styles.content}>{anime.episodes || anime.episodesAired}</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Duration</span>
				<span className={styles.content}>{anime.duration}</span>
			</div>
		</motion.div>
	);
};
