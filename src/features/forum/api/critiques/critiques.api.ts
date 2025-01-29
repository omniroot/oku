import { api } from "@/shared/api/api.ts";
import { AxiosRequestConfig } from "axios";
import { createInfiniteQuery } from "react-query-kit";
import { ICritique } from "./critiques.types.ts";

interface IGetCritiques {
	page?: number;
	limit: number;
	config?: AxiosRequestConfig;
}

export const getCritiques = ({ limit, page, config }: IGetCritiques) => {
	const realLimit = limit - 1; // because fucking shikimori api return limit + 1 and infinity query not work
	return api.get<ICritique[]>(`topics/?forum=critiques`, {
		params: {
			page,
			limit: realLimit,
		},
		...config,
	});
};

export const useGetCritiques = createInfiniteQuery<ICritique[], IGetCritiques>({
	queryKey: ["get-critiques"],
	fetcher: async ({ limit = 15 }, { pageParam = 1 }) => {
		console.log("critiques");

		const response = await getCritiques({ limit, page: pageParam });
		console.log({ response });

		return response.data;
	},
	initialPageParam: 1,
	getNextPageParam: (lastPage, pages) => {
		return lastPage.length === 15 ? pages.length + 1 : undefined;
	},
});
