import { api } from "@/shared/api/api.ts";
import { IAnimeSimilar } from "@features/animes/api/getAnimeSimilars/getAnimeSimilars.types.ts";
import { AxiosRequestConfig } from "axios";
import { createQuery } from "react-query-kit";

interface IGetAnimeSimilars {
	animeId: string;
	config?: AxiosRequestConfig;
}

export const getAnimeSimilars = ({ animeId }: IGetAnimeSimilars) => {
	return api.get<IAnimeSimilar[]>(`animes/${animeId}/similar`);
};

export const useGetAnimeSimilars = createQuery<IAnimeSimilar[], IGetAnimeSimilars>({
	queryKey: ["getAnimeSimilars"],
	fetcher: async (variables) => {
		const reponse = await getAnimeSimilars(variables);
		return reponse.data;
	},
	refetchInterval: 9999999999999,
});
