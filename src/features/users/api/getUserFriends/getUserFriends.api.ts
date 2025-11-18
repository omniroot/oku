import type { AxiosRequestConfig } from "axios";
import { createQuery } from "react-query-kit";
import type { IFriend } from "./getUserFriends.types.ts";
import { api } from "@/shared/api/api.ts";

interface IGetUserFriends {
	userId: number;
	config?: AxiosRequestConfig;
}

export const getUserFriends = ({ userId, config }: IGetUserFriends) => {
	return api.get<IFriend[]>(`users/${userId}/friends`, config);
};

export const useGetUserFriends = createQuery<IFriend[], IGetUserFriends>({
	queryKey: ["getUserFriends"],
	fetcher: async ({ userId, config }) => {
		const response = await getUserFriends({ userId, config });
		return response.data;
	},
});
