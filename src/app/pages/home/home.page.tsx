import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { IWidgets, useWidgets, WidgetComponents } from "@features/widgets/stores/widgets.store.tsx";
import { useEffect, useState } from "react";
import styles from "./home.page.module.css";

export const HomePage = () => {
	const [show, setShow] = useState(false);
	const { setTitle } = useHeader();
	const { widgets } = useWidgets();
	console.log({ widgets });

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			{Object.entries(widgets).map(([name, state]) => state && WidgetComponents[name as IWidgets])}
			<Button onClick={() => setShow((prev) => !prev)}>Show</Button>

			<BottomSheet title="Bottom sheet" isShow={show} onOutsideClick={() => setShow(false)}>
				<span>123</span>
				<span>456</span>
			</BottomSheet>
		</div>
	);
};
