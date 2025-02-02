import { api } from "@/shared/api/api.ts";
import { IUserRate } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import { createMutation } from "react-query-kit";

interface IDeleteUserRate {
	rate_id: number;
}

export const deleteUserRate = ({ rate_id }: IDeleteUserRate) => {
	return api.delete<IUserRate>(`v2/user_rates/${rate_id}`);
};

export const useDeleteUserRate = createMutation<IUserRate, IDeleteUserRate>({
	mutationKey: ["deleteUserRate"],
	mutationFn: async (variables) => {
		const response = await deleteUserRate(variables);
		return response.data;
	},
});
