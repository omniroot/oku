import { Badge } from "@components/ui/Badge/Badge.tsx";
import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Link } from "@tanstack/react-router";
import { FC, useState } from "react";
import styles from "./AnimeVerticalCard.module.css";

interface IAnimeVerticalCardProps {
	id: string;
	poster?: string;
	name?: string;
	date?: string;
	kind?: string;
	episodes?: number;
	poster_full?: string;
	userEpisodes?: number;
	onClick?: () => void;
	style?: React.CSSProperties;
}

export const AnimeVerticalCard: FC<IAnimeVerticalCardProps> = ({
	id,
	poster,
	poster_full,
	date,
	kind,
	name,
	episodes,
	userEpisodes,
	onClick = () => {},
	style,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const onContextMenuClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
		setIsOpen(true);
	};

	const onOpenInNewYabClick = () => {
		window.open(`/animes/${id}`, "_blank");
	};

	return (
		<Link
			className={styles.anime_vertical_card}
			to="/animes/$animeId"
			params={{ animeId: String(id) }}
			onClick={onClick}
			onContextMenu={onContextMenuClick}
			style={style}
		>
			{/* TODO: reweite to ImageView */}
			<div className={styles.poster} style={{ backgroundImage: `url(${poster || ""})` }}>
				<div className={styles.top}>
					<Badge>{date}</Badge>
					<Badge>{kind}</Badge>
				</div>
				<div className={styles.bottom}>
					<Badge>{userEpisodes ? `${userEpisodes} / ${episodes}` : `${episodes}`}</Badge>
				</div>
			</div>
			<div className={styles.info}>
				<Typography variant="title">{name}</Typography>
			</div>

			<BottomSheet title="Context menu" isShow={isOpen} onOutsideClick={() => setIsOpen(false)}>
				<div className={styles.mini_preview}>
					<ImageView
						allowFullscreen
						src={poster_full || poster || ""}
						className={styles.mini_poster}
					/>
					<div className={styles.context_subinfo}>
						<Typography variant="title">{name}</Typography>
						<div style={{ display: "inline-flex", gap: "8px" }}>
							<Badge>{kind}</Badge>
							<Badge>{date}</Badge>
						</div>
					</div>
				</div>
				<Button variant="secondary" onClick={onOpenInNewYabClick} className={styles.context_button}>
					Open in new tab
				</Button>
				<Button variant="delete" className={styles.context_button}>
					Delete
				</Button>
			</BottomSheet>
		</Link>
	);
};
