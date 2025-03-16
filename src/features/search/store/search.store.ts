import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface ISearch {
	query: string;
}

const searchStore = atomWithStorage<ISearch>("search", {
	query: "",
});

export const useSearch = () => {
	const [search, setSearch] = useAtom(searchStore);

	return { search, setSearch };
};
