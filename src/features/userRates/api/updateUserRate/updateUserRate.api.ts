import { api } from "@/shared/api/api.ts";
import { IUserRate } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { createMutation } from "react-query-kit";

interface IUpdateUserRate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateStatus;
	text?: string;
	score?: string;
}

export const updateUserRate = ({ userRateId, ...rest }: IUpdateUserRate) => {
	return api.patch<IUserRate>(`v2/user_rates/${userRateId}`, {
		...rest,
	});
};

export const useUpdateUserRate = createMutation<IUserRate, IUpdateUserRate>({
	mutationKey: ["updateUserRate"],
	mutationFn: async (variables) => {
		const response = await updateUserRate(variables);
		return response.data;
	},
});
