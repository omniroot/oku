import { RightArrowIcon } from "@/shared/assets/icons/RightArrowIcon.tsx";
import { convertShikimoriDate } from "@/shared/utils/convertShikimoriDate.ts";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { IAnime } from "@features/animes/api/anime.interface.ts";
import { useGetAnimeSimilars } from "@features/animes/api/getAnimeSimilars/getAnimeSimilars.api";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { Link } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { FC } from "react";

interface IAnimeSimilarProps {
	anime: IAnime;
}

export const AnimeSimilar: FC<IAnimeSimilarProps> = ({ anime }) => {
	const { data: similarAnimes } = useGetAnimeSimilars({ variables: { animeId: anime.id } });
	// console.log({ similarAnimes });

	let count = 0;

	if (!similarAnimes?.length || !anime) return;
	return (
		<HeadingSection
			title="Similars"
			actionsSlot={
				<Button variant="ghost" asLink>
					{/* <Typography weight="body">More</Typography> */}
					<Link from="/animes/$animeId" to="similars" params={{ animeId: String(anime.id) }}>
						more
						<RightArrowIcon />
					</Link>
				</Button>
				// <ButtonLink variant="outline" from="/animes/$animeId" to="similars">
				// </ButtonLink>
			}
		>
			<AnimeList>
				{similarAnimes.map((similar) => {
					count++;
					if (count <= 10) {
						console.log(convertShikimoriDate(similar.released_on || similar.aired_on));

						return (
							<AnimeVerticalCard
								key={similar.id}
								id={similar.id}
								poster={getPosterImage(similar.image.original)}
								name={similar.name}
								episodes={similar.episodes || similar.episodes_aired}
								date={convertShikimoriDate(similar.released_on || similar.aired_on).year}
								kind={similar.kind}
							/>
						);
					}
				})}
			</AnimeList>
		</HeadingSection>
	);
};
