import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useSearch } from "@features/search/store/search.store.ts";
import { FC } from "react";

interface IProps {
	// type?: "anime" | "user";
}
export const SearchResults: FC<IProps> = ({}) => {
	const { search } = useSearch();
	const debouncedQuery = useDebounce(search.query, 800);
	const {
		// refetch: fetchSearch,

		isFetching,
		isSuccess,
		data: animes,
	} = useGetAnimes({
		variables: { search: debouncedQuery, status: search.status },
		enabled: search.type === "anime",
		placeholderData: (a) => {
			return a;
		},
	});

	return (
		<>
			<span>{search.type}</span>
			{isFetching && <Loader />}
			{isSuccess && (
				<AnimeList>
					{animes.map((anime) => (
						<AnimeVerticalCard
							key={anime.id}
							name={anime.name}
							id={anime.id}
							poster={anime.poster.originalUrl}
							date={String(anime.releasedOn.year || anime.airedOn.year)}
							episodes={anime.episodes}
							userEpisodes={anime.userRate?.episodes}
							kind={anime.kind}
						/>
					))}
				</AnimeList>
			)}
		</>
	);
};
