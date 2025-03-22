import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useEffect } from "react";
import styles from "./home.page.module.css";
import { WidgetsList } from "@features/widgets/components/WidgetsList/WidgetsList.tsx";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";
import { Button } from "@components/ui/Button/Button.tsx";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const { addNotification } = useNotifications();

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			<WidgetsList />
			<Button onClick={() => addNotification({ message: `HI ${Math.random()}` })}>
				Add notificaition
			</Button>
		</div>
	);
};
