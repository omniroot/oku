import { graphql } from "@/shared/api/graphql.ts";
import { IAnime, IAnimeResponse } from "@features/animes/api/anime.interface.ts";
import { GET_ANIMES } from "@features/animes/api/getAnimes/getAnimes.graphql.ts";
import { AnimeStatus } from "@features/animes/api/getAnimes/getAnimes.types.ts";
import { AxiosRequestConfig } from "axios";
import { createInfiniteQuery, createQuery } from "react-query-kit";

interface IGetAnimes {
	animeId?: string;
	search?: string;
	status?: AnimeStatus;
	limit?: number;
	config?: AxiosRequestConfig;
	page?: number;
}

export const getAnimes = ({
	animeId = "",
	search = "",
	status = "",
	limit = 15,
	page = 1,
	config,
}: IGetAnimes) => {
	return graphql<IAnimeResponse>({
		query: GET_ANIMES,
		variables: {
			ids: animeId,
			search: search,
			limit: limit,
			status: status,
			page: page,
		},
		config,
	});
};

export const useGetAnimes = createQuery<IAnime[], IGetAnimes>({
	queryKey: ["getAnimes"],
	fetcher: async (variables) => {
		const reponse = await getAnimes(variables);
		return reponse.data.data.animes;
	},
});

export const useGetAnimesInfinite = createInfiniteQuery<IAnime[], IGetAnimes>({
	queryKey: ["getAnimesInfinite"],
	fetcher: async (variables, { pageParam }) => {
		const reponse = await getAnimes({ ...variables, page: pageParam });
		return reponse.data.data.animes;
	},
	initialPageParam: 1,
	getNextPageParam: (lastPage, pages) => {
		return lastPage.length === 15 ? pages.length + 1 : undefined;
	},
});
