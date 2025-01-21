import { ReactNode, FC } from "react";
import styles from "./Badge.module.css";
interface IBadgeProps {
	children?: ReactNode;
}
export const Badge: FC<IBadgeProps> = ({ children }) => {
	return <div className={styles.badge}>{children}</div>;
};
