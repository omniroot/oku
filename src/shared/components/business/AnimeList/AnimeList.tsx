import { ReactNode, FC } from "react";
import styles from "./AnimeList.module.css";
interface IAnimeListProps {
	children?: ReactNode;
}
export const AnimeList: FC<IAnimeListProps> = ({ children }) => {
	return <div className={styles.anime_list}>{children}</div>;
};
