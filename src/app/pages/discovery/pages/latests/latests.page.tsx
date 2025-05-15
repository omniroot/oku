import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { useGetAnimesInfinite } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { OngoingsPage } from "@pages/discovery/pages/ongoings/ongoings.page.tsx";
import { InfiniteData } from "@tanstack/react-query";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./latests.page.module.css";

// TODO: Delete from this and from other pages this fix
const fix = (collections: InfiniteData<IAnime[], number> | undefined) => {
	if (!collections) return;
	const result: IAnime[] = [];
	collections.pages.forEach((collection) => {
		collection.forEach((item) => {
			if (result[result.length - 1]?.id === String(item.id)) return;
			result.push(item);
		});
	});
	return result;
};

export const LatestPage = () => {
	const {
		data: latestPages,
		fetchNextPage,
		isFetching,
	} = useGetAnimesInfinite({
		variables: { status: "latest" },
	});
	const latests = fix(latestPages);
	// TODO: CHECK API BEFORE DELETE

	// TODO: Delete from this and from other pages this fix. CHECK
	// const latests = latestPages?.pages.reduce<IAnime[]>((acc, collections) => {
	// 	for (const collection of collections) {
	// 		// const lastCollectionId = acc[acc.length - 1]?.id;

	// 		// if (lastCollectionId !== collection.id) {
	// 		acc.push(collection);
	// 		// }
	// 	}
	// 	return acc;
	// }, []);
	// const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	return (
		<HeadingSection title="Latests">
			<div className={styles.ongoings_content}>
				<AnimeList>
					{latests &&
						latests.map((latest) => (
							<AnimeVerticalCard
								key={latest.id}
								id={latest.id}
								poster={latest.poster.mainUrl}
								name={latest.name}
								episodes={latest.episodes || latest.episodesAired}
							/>
						))}
				</AnimeList>
				<Button style={{ width: "100%" }} onClick={() => fetchNextPage()} loading={isFetching}>
					More
				</Button>
			</div>
		</HeadingSection>
	);
};

export const Route = createLazyRoute("/discovery/ongoings")({
	component: OngoingsPage,
});
