import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useCallback, useEffect } from "react";
import styles from "./home.page.module.css";
import { WidgetsList } from "@features/widgets/components/WidgetsList/WidgetsList.tsx";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const { addNotification } = useNotifications();

	const not = useCallback(() => {
		addNotification({ message: `HI ${Math.random()}` });
	}, []);

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
				<Typography color="surface">surface</Typography>
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--surface_container_low)" }}>
				<Typography color="surface">surface_container_low</Typography>
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
			<div className={styles.block} style={{ backgroundColor: "var(--secondary)" }}>
				<Typography color="secondary">hello world</Typography>
			</div>

			<div className={styles.block} style={{ backgroundColor: "var(--tertiary)" }}>
				<Typography color="tertiary">hello world</Typography>
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--error)" }}>
				<Typography color="error">hello world</Typography>
			</div>
			<div className={styles.block} style={{ backgroundColor: "var(--error_container)" }}>
				<Typography color="error_container">hello world</Typography>
			</div>

			<div className={styles.block} style={{ backgroundColor: "var(--tertiary)" }}>
				<Typography variant="headline" color="tertiary">
					Typography
				</Typography>
			</div>
			<Typography variant="label" size="large">
				label size large
			</Typography>
			<Typography variant="label" size="medium">
				label size medium
			</Typography>
			<Typography variant="label" size="small">
				label size small
			</Typography>
		</div>
	);
};
