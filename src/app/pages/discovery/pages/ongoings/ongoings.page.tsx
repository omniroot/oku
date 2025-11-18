import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import type { IAnime } from "@features/animes/api/anime.interface.ts";
import { useGetAnimesInfinite } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./ongoings.page.module.css";

export const OngoingsPage = () => {
	const {
		data: ongoingsPages,
		fetchNextPage,
		isFetching,
	} = useGetAnimesInfinite({
		variables: { status: "ongoing" },
	});
	const ongoings = ongoingsPages?.pages.reduce<IAnime[]>((acc, collections) => {
		for (const collection of collections) {
			// const lastCollectionId = acc[acc.length - 1]?.id;

			// if (lastCollectionId !== collection.id) {
			acc.push(collection);
			// }
		}
		return acc;
	}, []);
	// const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	return (
		<HeadingSection title="Ongoings">
			<div className={styles.ongoings_content}>
				<AnimeList>
					{ongoings &&
						ongoings.map((ongoing) => (
							<AnimeVerticalCard
								key={ongoing.id}
								id={ongoing.id}
								poster={ongoing.poster.mainUrl}
								name={ongoing.name}
								episodes={ongoing.episodes || ongoing.episodesAired}
							/>
						))}
				</AnimeList>
				<Button
					style={{ width: "100%" }}
					onClick={() => fetchNextPage()}
					loading={isFetching}
				>
					More
				</Button>
			</div>
		</HeadingSection>
	);
};

export const Route = createLazyRoute("/discovery/ongoings")({
	component: OngoingsPage,
});
