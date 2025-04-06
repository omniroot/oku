import { graphql } from "@/shared/api/graphql.ts";
import { createQuery } from "react-query-kit";

const GET_USERS = `
query($search: String, $limit: PositiveInt) {
  users(search: $search, limit: $limit) {
    id,
    avatarUrl,
    lastOnlineAt,
    nickname,
    url
  }
	
}
`;

export interface IGetUser {
	id: string;
	avatarUrl: string;
	lastOnlineAt: string;
	nickname: string;
	url: string;
}

interface IGetUsersResponse {
	users: IGetUser[];
}

interface IProps {
	search?: string;
	limit?: number;
}

export const getUsers = ({ search, limit = 15 }: IProps) => {
	return graphql<IGetUsersResponse>({ query: GET_USERS, variables: { search, limit } });
};

export const useGetUsers = createQuery<IGetUser[], IProps>({
	queryKey: ["getUsers"],
	fetcher: async (variables) => {
		const response = await getUsers(variables);
		return response.data.data.users;
	},
});
