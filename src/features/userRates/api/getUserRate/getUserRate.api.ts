import { graphql } from "@/shared/api/graphql.ts";
import { GET_USER_RATES } from "@features/userRates/api/getUserRates/getUserRates.graphql.ts";
import type { IUserRatesResponse } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import type { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import type { AxiosRequestConfig } from "axios";

interface IGetUserRates {
	userId: number;
	page?: number;
	limit?: number;
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
