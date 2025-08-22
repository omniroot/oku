import { CONSTS } from "@/shared/consts.ts";
import axios, { type AxiosRequestHeaders } from "axios";

export const _axios = axios.create({
  baseURL: "https://shikimori.one/api/",
  headers: {
    "User-Agent": CONSTS.USER_AGENT,
    "Content-Type": "application/json",
  },
});

_axios.interceptors.request.use(
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
