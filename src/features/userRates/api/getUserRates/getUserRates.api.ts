import { graphql } from "@/shared/api/graphql.ts";
import { GET_USER_RATES } from "@features/userRates/api/getUserRates/getUserRates.graphql.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { AxiosRequestConfig } from "axios";
import { createInfiniteQuery } from "react-query-kit";
import { IUserRate, IUserRatesResponse } from "./getUserRates.types.ts";

interface IGetUserRates {
	userId: number;
	page?: number;
	limit?: number;
	status?: IUserRateStatus;
	config?: AxiosRequestConfig;
}

interface IUseGetUserRates {
	userId: number;
	status?: IUserRateStatus;
	config?: AxiosRequestConfig;
}

export const getUserRates = ({
	userId,
	page = 1,
	limit = 30,
	status = "watching",
	config,
}: IGetUserRates) => {
	return graphql<IUserRatesResponse>({
		query: GET_USER_RATES,
		variables: {
			page,
			limit,
			status,
			userId,
		},
		config,
	});
};

export const useGetUserRates = createInfiniteQuery<IUserRate[], IUseGetUserRates>({
	queryKey: ["getUserRates"],
	fetcher: async (variables, { pageParam = 1 }) => {
		const { userId, config, status } = variables;
		const response = await getUserRates({
			userId,
			page: pageParam as number,
			limit: 15,
			status,
			config,
		});
		return response.data.data.userRates;
	},
	// queryFn: async ({ pageParam = 1 }) => {

	// },
	initialPageParam: 1,
	getNextPageParam: (lastPage, pages) => {
		return lastPage.length === 15 ? pages.length + 1 : undefined;
	},
});
