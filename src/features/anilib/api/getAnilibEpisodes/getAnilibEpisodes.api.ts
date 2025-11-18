import type { IAnimelibSearch } from "@features/anilib/api/getAnilibAnime/getAnilibAnime.types.ts";
import type { IAnilibEpisode } from "@features/anilib/api/getAnilibEpisodes/getAnilibEpisodes.types.ts";
import axios from "axios";
import { createQuery } from "react-query-kit";

interface IUseGetAnilibEpisodes {
	name: string;
	// config?: AxiosRequestConfig;
}

const getAnilibAnime = (name: string) => {
	return axios.get<{ data: IAnimelibSearch[] }>(
		`https://api.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate&q=${name}`,
	);
};

export const getAnilibEpisodes = (animeId: number) => {
	return axios.get<{ data: IAnilibEpisode[] }>(
		`https://api2.mangalib.me/api/episodes?anime_id=${animeId}`,
	);
};

export const useGetAnilibEpisodes = createQuery<IAnilibEpisode[], IUseGetAnilibEpisodes>({
	queryKey: ["anilib-get-episodes"],
	fetcher: async ({ name }) => {
		const anime = await getAnilibAnime(name);
		const animeId = anime.data.data[0].id;
		const episodes = await getAnilibEpisodes(animeId);
		return episodes.data.data;
	},
});
