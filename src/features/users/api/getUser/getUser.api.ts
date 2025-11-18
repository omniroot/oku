import { api } from "@/shared/api/api.ts";
import type { AxiosRequestConfig } from "axios";
import { createQuery } from "react-query-kit";
import type { IUser } from "./getUser.types.ts";

interface IGetUser {
	userId: number;
	config?: AxiosRequestConfig;
}

export const getUser = ({ userId, config }: IGetUser) => {
	return api.get<IUser>(`users/${userId}`, config);
};

export const useGetUser = createQuery<IUser, IGetUser>({
	queryKey: ["getUser"],
	fetcher: async (variables) => {
		const response = await getUser(variables);
		return response.data;
	},
});
