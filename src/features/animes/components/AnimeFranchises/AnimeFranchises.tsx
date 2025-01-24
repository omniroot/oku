import { IAnime } from "@features/animes/api/anime.interface.ts";
import { useGetAnimeFranchise } from "@features/animes/api/getAnimeFranchise/getAnimeFranchise.api.ts";
import { Link } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import styles from "./AnimeFranchises.module.css";

interface IAnimeFranchisesProps {
	anime: IAnime;
}
export const AnimeFranchises: FC<IAnimeFranchisesProps> = ({ anime }) => {
	const { data: franchise } = useGetAnimeFranchise({ variables: { animeId: anime.id } });

	if (!franchise?.length) return;
	return (
		<HeadingSection title="Franchises">
			<div className={styles.content}>
				{franchise?.map((item, index) => (
					<Link
						key={item.id}
						className={styles.franchise}
						to="/animes/$animeId"
						params={{ animeId: String(item.id) }}
						data-iscurrent={item.id === Number(anime.id) ? true : false}
					>
						<div className={styles.index}>{Math.abs(index - franchise.length)}</div>
						<ImageView src={item.image_url} alt={item.name} className={styles.poster} />
						<div className={styles.info}>
							<span className={styles.name}>{item.name}</span>
							<span className={styles.kind}>{item.kind}</span>
						</div>
						<span className={styles.year}>{item.year}</span>
					</Link>
				))}
			</div>
		</HeadingSection>
	);
};
