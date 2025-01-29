import { SearchIcon } from "@/shared/assets/icons/SearchIcon.tsx";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Input } from "@components/ui/Input/Input.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import styles from "./discovery.page.module.css";

export const DiscoveryPage = () => {
	const { setTitle } = useHeader();
	const [query, setQuery] = useState("");
	const {
		refetch: search,

		isFetching,
		isSuccess,
		data: animes,
	} = useGetAnimes({
		variables: { search: query },
		enabled: false,
		placeholderData: (a) => {
			return a;
		},
	});

	useEffect(() => {
		setTitle("Discovery");
	}, [setTitle]);

	const onSearchSubmit = () => {
		search();
	};

	return (
		<div className={styles.page}>
			<div className={styles.options}>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/ongoings">Ongoings</Link>
					</Button>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/latests">Latests</Link>
					</Button>
				</div>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/critiques">Critiques</Link>
					</Button>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/collections">Collections</Link>
					</Button>
				</div>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/calendar">Calendar</Link>
					</Button>
				</div>
			</div>
			<Input
				value={query}
				onChange={setQuery}
				placeholder="Search"
				rightSlot={<SearchIcon />}
				classNames={{ form: styles.search, input: styles.search }}
				onSubmit={onSearchSubmit}
			/>
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
		</div>
	);
};
