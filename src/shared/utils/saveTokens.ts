import { IAuthTokens } from "@features/auth/api/auth.api.ts";

export const saveTokens = ({ access_token, refresh_token }: IAuthTokens) => {
	if (access_token && refresh_token) {
		localStorage.setItem("access_token", access_token);
		localStorage.setItem("refresh_token", refresh_token);
	}
};
