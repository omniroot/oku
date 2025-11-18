import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useGetCritiques } from "@features/forum/api/critiques/critiques.api.ts";
import type { ICritique } from "@features/forum/api/critiques/critiques.types.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";

export const CritiquesPage = () => {
	const {
		data: critiquesPages,
		isFetching: isLoading,
		fetchNextPage: fetchNext,
	} = useGetCritiques({ variables: { limit: 15 } });

	const critiques = critiquesPages?.pages.reduce<ICritique[]>((acc, critiques) => {
		for (const critique of critiques) {
			const lastCritiqueId = acc[acc.length - 1]?.id;

			if (lastCritiqueId !== critique.id) {
				acc.push(critique);
			}
		}
		return acc;
	}, []);

	console.log({ critiquesPages, critiques });

	const onMoreButtonClick = () => {
		console.log("more button clicked");

		fetchNext();
	};

	// const onCritiqueShikimoriButtonClick = (
	// 	event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	// ) => {
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	alert("Not realized");
	// };

	return (
		<AnimeList>
			{isLoading && <Loader fullscreen />}
			{critiques &&
				critiques.map((critique) => {
					return (
						<AnimeVerticalCard
							key={critique.id}
							id={String(critique.linked.target.id)}
							name={critique.topic_title}
							poster={getPosterImage(critique.linked.target.image.x96)}
						/>
					);
				})}
			<Button onClick={onMoreButtonClick} style={{ width: "100%" }} disabled={isLoading}>
				More
			</Button>
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/critiques")({
	component: CritiquesPage,
});
