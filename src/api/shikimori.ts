import { _auth_api } from "@/api/auth/auth.api.ts";
import { _users_api } from "@/api/users/users.api.ts";
import { CONSTS } from "@/shared/consts.ts";
import { queryOptions } from "@tanstack/react-query";
import { client } from "node-shikimori";

// export const shikimori = {
//   auth: _auth_api,
//   users: _users_api,
// };

export const shikimori = client({
  clientName: CONSTS.USER_AGENT,
  token: String(localStorage.getItem("access_token")),
});

export const getWhoamiOptions = () =>
  queryOptions({
    queryKey: ["whoami"],
    queryFn: () => shikimori.users.whoami(),
  });
