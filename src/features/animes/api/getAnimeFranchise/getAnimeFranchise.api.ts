import { api } from "@/shared/api/api.ts";
import {
	IAnimeFranchise,
	IAnimeFranchisesResponse,
} from "@features/animes/api/getAnimeFranchise/getAnimeFranchise.types.ts";
import { AxiosRequestConfig } from "axios";
import { createQuery } from "react-query-kit";

interface IGetAnimeFranchise {
	animeId: string;
	config?: AxiosRequestConfig;
}

export const getAnimeFranchise = ({ animeId }: IGetAnimeFranchise) => {
	return api.get<IAnimeFranchisesResponse>(`animes/${animeId}/franchise`);
};

export const useGetAnimeFranchise = createQuery<IAnimeFranchise[], IGetAnimeFranchise>({
	queryKey: ["getAnimeFranchise"],
	fetcher: async (variables) => {
		const reponse = await getAnimeFranchise(variables);
		return reponse.data.nodes;
	},
});
