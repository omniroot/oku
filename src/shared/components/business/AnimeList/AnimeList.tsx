import { ReactNode, FC } from "react";
import styles from "./AnimeList.module.css";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
interface IAnimeListProps {
	children?: ReactNode;
	loading?: boolean;
}
export const AnimeList: FC<IAnimeListProps> = ({ children, loading = false }) => {
	if (loading) {
		const items = Array.from({ length: 20 }, (_, index) => index);
		return (
			<div className={styles.anime_list}>
				{items.map(() => (
					<AnimeVerticalCard id="0" poster="" name="Loading" />
				))}
			</div>
		);
	}
	return <div className={styles.anime_list}>{children}</div>;
};
