import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { getRouteApi } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./screenshots.page.module.css";

export const ScreenshotsPage = () => {
	const { animeId } = getRouteApi("/animes/$animeId/screenshots").useParams();
	const { data: animes } = useGetAnimes({ variables: { animeId, limit: 1 } });
	const anime = animes?.[0];

	if (!anime) return;
	return (
		<div className={styles.screenshots_page}>
			<HeadingSection title={`${anime.name} | Screenshots`} className={styles.heading}>
				<div className={styles.screenshots_list}>
					{anime.screenshots.map((screenshot) => (
						<ImageView
							key={screenshot.id}
							src={screenshot.x332Url}
							full={screenshot.originalUrl}
							allowFullscreen
							className={styles.screenshot}
						/>
					))}
				</div>
			</HeadingSection>
		</div>
	);
};

// export const Route = createLazyRoute("/animes/$animeId/screenshots")({
// 	component: ScreenshotsPage,
// });
