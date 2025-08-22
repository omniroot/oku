import { CONSTS } from "@/shared/consts.ts";
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export const _graphql = axios.create({
  baseURL: "https://shikimori.one/api/graphql",
  headers: {
    "User-Agent": CONSTS.USER_AGENT,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

interface IVariables {
  [key: string]: string | number | undefined;
}

interface IGraphql {
  query: string;
  variables?: IVariables;
  config?: AxiosRequestConfig;
}

export const graphql = async <T>({
  query,
  variables,
  config,
}: IGraphql): Promise<AxiosResponse<{ data: T }>> => {
  const response = await _graphql.post<{ data: T }>(
    "",
    {
      query: query,
      variables: variables,
    },
    config
  );
  return response;
};
