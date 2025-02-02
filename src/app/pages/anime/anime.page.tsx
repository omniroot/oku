import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeFranchises } from "@features/animes/components/AnimeFranchises/AnimeFranchises.tsx";
import { AnimeInfo } from "@features/animes/components/AnimeInfo/AnimeInfo.tsx";
import { AnimeMoreInfo } from "@features/animes/components/AnimeMoreInfo/AnimeMoreInfo.tsx";
import { AnimeScreenshots } from "@features/animes/components/AnimeScreenshots/AnimeScreenshots.tsx";
import { AnimeSimilar } from "@features/animes/components/AnimeSimilar/AnimeSimilar.tsx";
import { AnimeWatchContainer } from "@features/animes/components/AnimeWatchContainer/AnimeWatchContainer.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./anime.page.module.css";

export const AnimePage = () => {
	const { setTitle, setIcon } = useHeader();
	const { animeId } = getRouteApi("/animes/$animeId").useParams();
	const { data: animes, isFetching } = useGetAnimes({ variables: { animeId, limit: 1 } });
	const anime = animes?.[0];

	console.log({ anime });

	// const isHentai = anime?.genres.some((g) => g.name === "Hentai");

	useEffect(() => {
		setTitle("Anime");
		setIcon(null);
	}, [setTitle, setIcon]);

	return (
		<div className={styles.page}>
			{!anime && isFetching && <Loader fullscreen />}
			{anime && (
				<>
					<AnimeInfo anime={anime} />
					<AnimeMoreInfo anime={anime} />
					<AnimeWatchContainer anime={anime} />
					<AnimeScreenshots anime={anime} />
					<AnimeFranchises anime={anime} />
					<AnimeSimilar anime={anime} />
				</>
			)}
		</div>
	);
};
