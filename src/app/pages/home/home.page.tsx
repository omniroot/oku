import { useHeader } from "@features/storage/stores/header.storage.ts";
import { IWidgets, useWidgets } from "@features/widgets/stores/widgets.store.tsx";
import { useEffect } from "react";
import styles from "./home.page.module.css";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const { widgets, getWidget, mounted } = useWidgets();

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			{mounted &&
				Object.entries(widgets).map(([name, widget]) => {
					const { state } = getWidget(name as IWidgets);
					return state && widget.component;
				})}
		</div>
	);
};
