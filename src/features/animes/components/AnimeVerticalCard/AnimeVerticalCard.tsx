import { Link } from "@tanstack/react-router";
import { FC } from "react";
import styles from "./AnimeVerticalCard.module.css";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";

interface IAnimeVerticalCardProps {
	id: string;
	poster?: string;
	name?: string;
	date?: string;
	kind?: string;
	episodes?: number;
	userEpisodes?: number;
	onClick?: () => void;
}

export const AnimeVerticalCard: FC<IAnimeVerticalCardProps> = ({
	id,
	poster,
	date,
	kind,
	name,
	episodes,
	userEpisodes,
	onClick = () => {},
}) => {
	return (
		<Link
			className={styles.anime_vertical_card}
			to="/animes/$animeId"
			params={{ animeId: String(id) }}
			onClick={onClick}
		>
			{/* TODO: reweite to ImageView */}
			<div className={styles.poster} style={{ backgroundImage: `url(${poster || "/404.png"})` }}>
				<div className={styles.top}>
					<Badge>{date}</Badge>
					<Badge>{kind}</Badge>
				</div>
				<div className={styles.bottom}>
					<Badge>{userEpisodes ? `${userEpisodes} / ${episodes}` : `${episodes}`}</Badge>
				</div>
			</div>
			<div className={styles.info}>
				<Typography weight="title">{name}</Typography>
			</div>
		</Link>
	);
};
