import { CONSTS } from "@/shared/consts.ts";
import axios, {
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
  type AxiosResponse,
} from "axios";

export const _graphql = axios.create({
  baseURL: "https://shikimori.one/api/graphql",
  headers: {
    "User-Agent": CONSTS.USER_AGENT,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

_graphql.interceptors.request.use(
  (config) => {
    // Получаем access token из local storage
    const token = localStorage.getItem("access_token");

    // Если токен существует, добавляем его в заголовки запроса
    if (token) {
      // Убедимся, что headers определены
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }

    return config;
  },
  (error) => {
    // Обработка ошибок запроса
    return Promise.reject(error);
  }
);

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
}: IGraphql): Promise<AxiosResponse<T>> => {
  const response = await _graphql.post<T>(
    "",
    {
      query: query,
      variables: variables,
    },
    config
  );
  return response;
};
