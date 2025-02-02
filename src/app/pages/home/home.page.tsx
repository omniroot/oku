import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useEffect } from "react";
import styles from "./home.page.module.css";
import { WidgetsList } from "@features/widgets/components/WidgetsList/WidgetsList.tsx";

export const HomePage = () => {
	const { setTitle } = useHeader();

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			<WidgetsList />
		</div>
	);
};
