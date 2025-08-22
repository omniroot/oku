import { _axios } from "@/api/axios.ts";
import { CONSTS } from "@/shared/consts.ts";
import axios from "axios";
import { createQuery } from "react-query-kit";

const _shikimoriAuth = axios.create({
  baseURL: "https://shikimori.one/",
  headers: {
    "User-Agent": CONSTS.USER_AGENT,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export interface ICurrentUser {
  id: string;
  avatarUrl: string;
  nickname: string;
  lastOnlineAt: string;
}

export interface IAuthResponse {
  currentUser: ICurrentUser;
}

export interface IAuthTokens {
  access_token: string;
  refresh_token: string;
}

export const _auth_api = {
  whoami: async () => {
    const { data } = await _axios.get<IAuthResponse>("users/whoami");
    return data;
  },

  getCurrentUserId: async () => {
    try {
      const response = await _shikimoriAuth.get<{ id: string }>(
        "users/whoami",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log("GetCurrentUserID:  ", response);
      return response.data.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  fetchTokens: async (authorizationCode: string) => {
    try {
      const response = await _shikimoriAuth.post<IAuthTokens>(
        "https://shikimori.one/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: CONSTS.OAUTH_CLIENT_ID,
          client_secret: CONSTS.OAUTH_CLIENT_SECRET,
          code: String(authorizationCode),
          redirect_uri: CONSTS.OAUTH_REDIRECT_URI,
        }
      );
      if (response.data) {
        return {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
      }
    } catch (error) {
      console.log("Error while login", error);
    }
  },

  refreshTokens: async (refresh_token: string) => {
    try {
      const response = await _shikimoriAuth.post<IAuthTokens>(
        "https://shikimori.one/oauth/token",
        {
          grant_type: "refresh_token",
          client_id: CONSTS.OAUTH_CLIENT_ID,
          client_secret: CONSTS.OAUTH_CLIENT_SECRET,
          refresh_token: refresh_token,
        }
      );
      if (response.data) {
        return {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
      }
    } catch (error) {
      console.log("Error while refreshing tokens", error);
    }
  },
};

export const useAuthWhoami = createQuery({
  queryKey: ["auth", "whoami"],
  fetcher: () => _auth_api.whoami(),
});
