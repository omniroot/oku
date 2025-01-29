import { HelloWidget } from "@features/widgets/HelloWidget/HelloWidget.tsx";
import styles from "./home.page.module.css";

export const HomePage = () => {
	return (
		<div className={styles.page}>
			<HelloWidget />
		</div>
	);
};
