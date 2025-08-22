import { useAuthWhoami, type IAuthTokens } from "@/api/auth/auth.api.ts";
import { shikimori } from "@/api/shikimori.ts";
import { CONSTS } from "@/shared/consts.ts";
import { useAuthStore } from "@/stores/auth.store.ts";
import { getRouteApi } from "@tanstack/react-router";
import { useLayoutEffect, type ReactNode } from "react";

export const saveTokens = ({ access_token, refresh_token }: IAuthTokens) => {
  if (access_token && refresh_token) {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }
};
const route = getRouteApi("/");

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = route.useNavigate();
  const { code }: { code: string } = route.useSearch();
  const { data: whoami } = useAuthWhoami();
  const { setIsAuth } = useAuthStore();

  useLayoutEffect(() => {
    const login = async () => {
      if (code && code.length > 1) {
        const tokens = await shikimori.auth.fetchTokens(code);
        if (!tokens) {
          console.log("Tokens not received");
          return false;
        }
        saveTokens(tokens);

        // fetch current user id
        const userId = await shikimori.auth.getCurrentUserId();
        if (!userId) {
          console.log("user with new token not received");
          return;
        }
        setIsAuth(true);

        window.open(CONSTS.URL, "_self");
      }
    };
    login();
  }, [code]);

  useLayoutEffect(() => {
    console.log({ whoami });
    if (!whoami) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);
  }, [whoami]);

  return children;
};
