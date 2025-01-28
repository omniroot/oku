import { Button } from "@components/ui/Button/Button.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { ISelectOption, Select } from "@components/ui/Select/Select.tsx";
import { useGetAnilibAnime } from "@features/anilib/api/getAnilibAnime/getAnilibAnime.ts";
import { useGetAnilibEpisodes } from "@features/anilib/api/getAnilibEpisodes/getAnilibEpisodes.api.ts";
import { IAnilibEpisode } from "@features/anilib/api/getAnilibEpisodes/getAnilibEpisodes.types.ts";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { FC, useEffect, useState } from "react";
import styles from "./AnimeWatch.module.css";

const getEpisodes = (episodes: IAnilibEpisode[] | undefined) => {
	if (!episodes) return [];
	const elements = episodes.map((episode) => ({
		value: String(episode.number),
		label: episode.name ? `${episode.number} - ${episode.name}` : `${episode.number}`,
	}));
	console.log({ elements });

	return elements;
};

const getActiveEpisode = (episodes: ISelectOption[], userEpisode: number) => {
	const episodeActive = episodes?.find((episode) => episode.value === String(userEpisode));
	return episodeActive ?? episodes[0];
};

interface IAnimeWatchProps {
	anime: IAnime;
}
export const AnimeWatch: FC<IAnimeWatchProps> = ({ anime }) => {
	const { data: anilibAnime } = useGetAnilibAnime({ name: anime.name });
	const {
		data: episodes,
		isFetching: episodesLoading,
		isSuccess,
	} = useGetAnilibEpisodes({
		variables: { name: anime.name },
	});
	const [episodeElements, setEpisodeElements] = useState<ISelectOption[]>([]);
	const [episodeActive, setEpisodeActive] = useState<ISelectOption>();

	useEffect(() => {
		if (episodes && isSuccess) {
			setEpisodeElements(getEpisodes(episodes));
		}
	}, [episodes, isSuccess]);

	useEffect(() => {
		if (episodeElements) {
			setEpisodeActive(getActiveEpisode(episodeElements, anime.userRate?.episodes));
		}
	}, [episodeElements, anime.userRate?.episodes]);

	console.log("rerender");

	console.log({ episodeActive, episodeElements, episodes });

	const onWatchButtonClick = () => {
		const anilibEpisode = episodes?.find(
			(ell) => ell.number === String(anime.userRate?.episodes || 1),
		);

		window.open(
			`https://anilib.me/ru/anime/${anilibAnime?.[0].slug_url}/watch?episode=${anilibEpisode?.id}`,
			"_blank",
		);
	};

	if (episodesLoading || !episodeActive) return <Loader />;

	return (
		<HeadingSection title="Watch">
			<div className={styles.watch_content}>
				<Select
					options={episodeElements}
					defaultValue={episodeActive}
					onChange={(selectedOption) => {
						if (selectedOption) {
							setEpisodeActive(selectedOption);
						}
					}}
				/>
				<Button className={styles.watch_button} onClick={onWatchButtonClick}>
					Watch {episodeActive.value} episode
				</Button>
			</div>
		</HeadingSection>
	);
};
