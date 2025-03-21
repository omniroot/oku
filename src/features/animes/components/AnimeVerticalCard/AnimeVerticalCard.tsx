import { Badge } from "@components/ui/Badge/Badge.tsx";
import { Portal } from "@components/ui/Portal/Portal.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Link, useNavigate } from "@tanstack/react-router";
import { FC, useState } from "react";
import styles from "./AnimeVerticalCard.module.css";
import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Button } from "@components/ui/Button/Button.tsx";

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
	const navigate = useNavigate();
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

			<BottomSheet title="Context menu" isShow={isOpen} onOutsideClick={() => setIsOpen(false)}>
				<div className={styles.mini_preview}>
					<ImageView allowFullscreen src={poster || "404.png"} className={styles.mini_poster} />
					<div className={styles.context_subinfo}>
						<Typography size="medium" weight="title">
							{name}
						</Typography>
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
