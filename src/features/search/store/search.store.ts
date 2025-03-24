import { IAnimeStatus } from "@features/animes/api/getAnimes/getAnimes.types.ts";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface ISearch {
	query: string;
	type: "anime" | "hentai" | "user" | "manga";
	status: IAnimeStatus;
}

const searchStore = atomWithStorage<ISearch>("search", {
	query: "",
	status: "",
	type: "anime",
});

export const useSearch = () => {
	const [search, setSearch] = useAtom(searchStore);

	return { search, setSearch };
};
