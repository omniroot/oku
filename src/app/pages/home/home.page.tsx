import { Button } from "@components/ui/Button/Button.tsx";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useCallback, useEffect } from "react";
import styles from "./home.page.module.css";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const { addNotification } = useNotifications();

	const not = useCallback(() => {
		addNotification({ message: `HI ${Math.random()}` });
	}, [addNotification]);

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			{/* <WidgetsList /> */}
			<Button onClick={not}>Add notificaition</Button>

			<div className={styles.block} style={{ backgroundColor: "var(--surface_container_lowest)" }}>
				surface_container_lowest
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface)" }}>
				surface
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface_container_low)" }}>
				surface_container_low
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface_container)" }}>
				surface_container
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface_container_high)" }}>
				surface_container_high
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface_container_highest)" }}>
				surface_container_highest
			</div>
		</div>
	);
};
