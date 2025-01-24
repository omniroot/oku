import { graphql } from "@/shared/api/graphql.ts";
import { GET_USER_RATES } from "@features/userRates/api/getUserRates/getUserRates.graphql.ts";
import { IUserRatesResponse } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { AxiosRequestConfig } from "axios";

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
