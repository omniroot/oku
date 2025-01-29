import { api } from "@/shared/api/api.ts";
import { AxiosRequestConfig } from "axios";
import { createQuery } from "react-query-kit";
import { ICalendar } from "./calendar.interface.ts";

interface IGetCalendar {
	config?: AxiosRequestConfig;
}

export const getCalendars = ({ config }: IGetCalendar = {}) => {
	return api.get<ICalendar[]>("calendar", config);
};

export const useGetCalendar = createQuery<ICalendar[], IGetCalendar>({
	queryKey: ["calendar"],
	fetcher: async () => {
		const response = await getCalendars();

		return response.data;
	},
});
