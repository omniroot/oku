import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { ListView } from "@components/ui/ListView/ListView.tsx";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useSearch } from "@features/search/store/search.store.ts";
import { useGetUsers } from "@features/users/api/getUsers/getUsers.api.ts";
import { UserItem } from "@features/users/components/UserItem/UserItem.tsx";
import { FC } from "react";

interface IProps {
	type?: "anime" | "user";
}
export const SearchResults: FC<IProps> = () => {
	const { search } = useSearch();
	const debouncedQuery = useDebounce(search.query, 800);
	const {
		isFetching: isAnimesFetching,
		// isSuccess: isAnimesSuccess,
		data: animes,
	} = useGetAnimes({
		variables: { search: debouncedQuery, status: search.status },
		enabled: search.type === "anime",
		placeholderData: (a) => {
			return a;
		},
	});

	const {
		// isFetching: isUsersFetching,
		// isSuccess: isUsersSuccess,
		data: users,
	} = useGetUsers({
		variables: { search: debouncedQuery },
		enabled: search.type === "user",
		placeholderData: (a) => {
			return a;
		},
	});

	// separate for useGetAnimes, useGetUsers, and add check in bootm {isUsersSuccess && and etc }

	return (
		<>
			{/* <span>{search.type}</span> */}
			{search.type === "anime" && (
				<AnimeList loading={isAnimesFetching}>
					{animes?.map((anime) => (
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

			{search.type === "user" && (
				<ListView>
					{users?.map((user) => (
						<UserItem
							id={String(user.id)}
							title={user.nickname}
							avatar={user.avatarUrl}
							lastOnline={user.lastOnlineAt}
						/>
						// <SearchUserCard user={user} />
					))}
				</ListView>
			)}
		</>
	);
};
