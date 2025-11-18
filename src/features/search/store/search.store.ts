import type { IAnimeStatus } from "@features/animes/api/getAnimes/getAnimes.types.ts";
import { useImmerAtom } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";

export type ISearchType = "anime" | "hentai" | "user" | "manga";

interface ISearch {
	query: string;
	type: ISearchType;
	status: IAnimeStatus;
}

const searchStore = atomWithStorage<ISearch>("search", {
	query: "",
	status: "",
	type: "anime",
});

export const useSearch = () => {
	const [search, setSearch] = useImmerAtom(searchStore);

	return { search, setSearch };
};
