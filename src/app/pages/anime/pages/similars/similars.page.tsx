import { useGetAnimeSimilars } from "@features/animes/api/getAnimeSimilars/getAnimeSimilars.api.ts";
import styles from "./similars.page.module.css";
import { getRouteApi } from "@tanstack/react-router";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { convertShikimoriDate } from "@/shared/utils/convertShikimoriDate.ts";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
export const SimilarsPage = () => {
	const { animeId } = getRouteApi("/animes/$animeId/similars").useParams();
	const { data: similars } = useGetAnimeSimilars({ variables: { animeId } });
	return (
		<div className={styles.page}>
			<HeadingSection title={`Screenshots`}>
				<AnimeList>
					{similars?.map((similar) => {
						return (
							<AnimeVerticalCard
								id={similar.id}
								poster={getPosterImage(similar.image.original)}
								name={similar.name}
								key={similar.id}
								episodes={similar.episodes}
								kind={similar.kind}
								date={convertShikimoriDate(similar.released_on || similar.aired_on).year}
							/>
						);
					})}
				</AnimeList>{" "}
			</HeadingSection>
		</div>
	);
};
