import { api } from "@/shared/api/api.ts";
import type { AxiosRequestConfig } from "axios";
import { createInfiniteQuery } from "react-query-kit";
import type { ICollection } from "./collections.types.ts";

interface IGetCollections {
	page: number;
	limit: number;
	config?: AxiosRequestConfig;
}

export const getCollections = ({ limit, page, config }: IGetCollections) => {
	const realLimit = limit - 1; // because fucking shikimori api return limit + 1 and infinity query not work
	return api.get<ICollection[]>(`topics/?forum=collections`, {
		params: {
			page,
			limit: realLimit,
		},
		...config,
	});
};

export const useGetCollections = createInfiniteQuery<ICollection[], IGetCollections>({
	queryKey: ["get-collections"],
	fetcher: async ({ limit = 15 }, { pageParam = 1 }) => {
		console.log("fetch in hook", pageParam);

		const response = await getCollections({ page: pageParam as number, limit });
		return response.data;
	},
	initialPageParam: 1,
	getNextPageParam: (lastPage, pages) => {
		console.log("fetch in get next page param", lastPage.length);

		return lastPage.length === 15 ? pages.length + 1 : undefined;
	},
});
