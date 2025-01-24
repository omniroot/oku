import { Button } from "@components/ui/Button/Button.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { useGetAnilibAnime } from "@features/anilib/api/getAnilibAnime/getAnilibAnime.ts";
import { useGetAnilibEpisodes } from "@features/anilib/api/getAnilibEpisodes/getAnilibEpisodes.api.ts";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { FC, useState } from "react";
import styles from "./AnimeWatch.module.css";
import { Typography } from "@components/ui/Typography/Typography.tsx";

const getEpisodes = (maxEpisodes: number) => {
	const elements = Array.from({ length: maxEpisodes }, (_, i) => `${i + 1}`);

	return elements;
};

interface IAnimeWatchProps {
	anime: IAnime;
}
export const AnimeWatch: FC<IAnimeWatchProps> = ({ anime }) => {
	const [episodeElements] = useState(getEpisodes(anime.episodes || anime.episodesAired));
	const [episodeActive, setEpisodeActive] = useState(episodeElements[0]);
	const { data: anilibAnime } = useGetAnilibAnime({ name: anime.name });
	const { data: episodes, isFetching: episodesLoading } = useGetAnilibEpisodes({
		variables: { name: anime.name },
	});
	// const [anilibEpisodeActive, setAnilibEpisodeActive] = useState(0);

	const onWatchButtonClick = () => {
		const anilibEpisode = episodes?.find((ell) => ell.number === episodeActive);

		window.open(
			`https://anilib.me/ru/anime/${anilibAnime?.[0].slug_url}/watch?episode=${anilibEpisode?.id}`,
			"_blank",
		);
		// getLink();
	};

	return (
		<HeadingSection title="Watch">
			<div className={styles.watch_content}>
				<Typography>
					Fix this. After clikc on similar anime and got back episode counts not update!
				</Typography>
				<div className={styles.episodes}>
					{episodeElements.map((ell) => {
						return (
							<button
								className={styles.episode}
								onClick={() => setEpisodeActive(ell)}
								data-active={ell === episodeActive}
							>
								{ell}
							</button>
						);
					})}
				</div>
				<Button
					className={styles.watch_button}
					loading={episodesLoading}
					onClick={onWatchButtonClick}
				>
					Watch {episodeActive} episode
				</Button>
				{/* <Typography>{anilibEpisodeActive}</Typography> */}
			</div>
		</HeadingSection>
	);
};
