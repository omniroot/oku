import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useGetCollections } from "@features/forum/api/collections/collections.api.ts";
import type { ICollection } from "@features/forum/api/collections/collections.types.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";

export const CollectionsPage = () => {
	const {
		data: collectionsPages,
		isFetching: isLoading,
		fetchNextPage: fetchNext,
	} = useGetCollections({ variables: { limit: 15, page: 1 } });

	const collections = collectionsPages?.pages.reduce<ICollection[]>(
		(acc, collections) => {
			for (const collection of collections) {
				const lastCollectionId = acc[acc.length - 1]?.id;

				if (lastCollectionId !== collection.id) {
					acc.push(collection);
				}
			}
			return acc;
		},
		[],
	);

	// const onCollectionShikimoriButtonClick = (
	// 	event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	// 	link: string,
	// ) => {
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	window.open(link, "_blank");
	// };

	const onMoreButtonClick = () => {
		console.log("more button clicked");

		fetchNext();
	};

	return (
		<AnimeList>
			{isLoading && <Loader fullscreen />}
			{collections &&
				collections.map((collection) => {
					return (
						<AnimeVerticalCard
							key={collection.id}
							id={String(collection.id)}
							name={collection.topic_title}
							// poster={getPosterImage(collection..x96)}
						/>
					);
				})}
			<Button onClick={onMoreButtonClick} style={{ width: "100%" }}>
				More
			</Button>
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/collections")({
	component: CollectionsPage,
});
