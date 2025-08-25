import { graphql } from "@/api/graphql.ts";
import { createQuery } from "react-query-kit";

const QUERY_GET_CURRENT_USER = `
{
  currentUser {
  id
    avatarUrl
    lastOnlineAt
    nickname
    url
}}
`;

interface IQUERY_GET_CURRENT_USER {
  currentUser: {
    id: string;
    avatarUrl: string;
    lastOnlineAt: string;
    nickname: string;
    url: string;
  };
}

export const _users_api = {
  getCurrentUser: async () => {
    const { data } = await graphql<IQUERY_GET_CURRENT_USER>({
      query: QUERY_GET_CURRENT_USER,
    });
    return data;
  },
};

export const useGetCurrentUser = createQuery({
  queryKey: ["auth", "whoami"],
  fetcher: () => _users_api.getCurrentUser(),
});
