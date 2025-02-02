import { api } from "@/shared/api/api.ts";
import { IUserRate } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { createMutation } from "react-query-kit";

interface IAddUserRate {
	user_id: number;
	target_id?: number;
	target_type: "Anime";
	episodes?: string;
	status?: IUserRateStatus;
}

export const addUserRate = ({ ...rest }: IAddUserRate) => {
	return api.post<IUserRate>(`v2/user_rates`, {
		...rest,
	});
};

export const useAddUserRate = createMutation<IUserRate, IAddUserRate>({
	mutationKey: ["addUserRate"],
	mutationFn: async (variables) => {
		const response = await addUserRate(variables);
		return response.data;
	},
});
