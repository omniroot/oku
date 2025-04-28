import { RightArrowIcon } from "@/shared/assets/icons/RightArrowIcon.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { Link } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import styles from "./AnimeScreenshots.module.css";

interface IAnimeScreenshotsProps {
	anime: IAnime;
}
export const AnimeScreenshots: FC<IAnimeScreenshotsProps> = ({ anime }) => {
	let count = 0;

	if (!anime.screenshots.length) return;
	return (
		<HeadingSection
			title="Screenshots"
			actionsSlot={
				<Button variant="ghost" asLink>
					<Link from="/animes/$animeId" to="screenshots">
						more
						<RightArrowIcon />
					</Link>
				</Button>
			}
		>
			<div className={styles.anime_screenshots_container}>
				{anime.screenshots.map((screenshot) => {
					count++;
					if (count <= 5) {
						return (
							<ImageView
								alt={`Anime screenshot ${screenshot.id}`}
								src={screenshot.x332Url}
								className={styles.anime_screenshot_image}
								full={screenshot.originalUrl}
								key={screenshot.id}
								allowFullscreen
							/>
						);
					}
				})}
			</div>
		</HeadingSection>
	);
};
