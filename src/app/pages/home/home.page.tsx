import styles from "./home.page.module.css";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { IWidgets, useWidgets, WidgetComponents } from "@features/widgets/stores/widgets.store.tsx";
import { useEffect } from "react";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const { widgets } = useWidgets();
	console.log({ widgets });

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);
	return (
		<div className={styles.page}>
			{Object.entries(widgets).map(([name, state]) => state && WidgetComponents[name as IWidgets])}
		</div>
	);
};
