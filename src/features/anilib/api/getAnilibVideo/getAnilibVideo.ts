import type {
	IAnilibKodikPlayer,
	IAnilibAnimeLibPlayer,
	IAnilibVideo,
} from "@features/anilib/api/getAnilibVideo/getAnilibVideo.types.ts";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import axios, { type AxiosRequestConfig } from "axios";

interface IGetAnilibVideo {
	episodeId: number;
	config?: AxiosRequestConfig;
}

interface IUseGetAnilibVideo {
	episodeId: number;
	config?: UseQueryOptions<IAnilibKodikPlayer[] | IAnilibAnimeLibPlayer[]>;
}

export const getAnilibVideo = ({ episodeId }: IGetAnilibVideo) => {
	return axios.get<{
		data: IAnilibVideo;
	}>(`https://api2.mangalib.me/api/episodes/${episodeId}`, {});
};

export const useGetAnilibVideo = ({ episodeId, config }: IUseGetAnilibVideo) => {
	return useQuery<IAnilibKodikPlayer[] | IAnilibAnimeLibPlayer[]>({
		queryKey: ["anilib-get-video", episodeId],
		queryFn: async () => {
			const response = await getAnilibVideo({ episodeId });
			// console.log(response.data.data.players);

			return response.data.data.players;
		},
		...config,
	});
};
