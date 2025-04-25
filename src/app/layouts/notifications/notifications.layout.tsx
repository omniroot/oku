import { Button } from "@components/ui/Button/Button.tsx";
import { AnimatePresence, motion } from "motion/react";
import styles from "./notifications.layout.module.css";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";
import { useEffect } from "react";
import { TrashIcon } from "@/shared/assets/icons/TrashIcon.tsx";
import { useMaterialTheme } from "@/shared/MaterialTheme/MaterialTheme.tsx";

export const NotificationsLayout = () => {
	const { notifications, deleteNotification } = useNotifications();
	const { getVar } = useMaterialTheme();

	useEffect(() => {
		if (!notifications.length) return;

		setTimeout(() => {
			deleteNotification(notifications[0].id);
		}, 2000);
	}, [deleteNotification, notifications]);

	return (
		<ul className={styles.notification_layout}>
			<AnimatePresence mode="popLayout">
				{notifications.map((notification) => {
					return (
						<motion.li
							key={notification.id}
							layout
							initial={{ opacity: 0, x: -150 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 15 }}
							transition={{ duration: 0.6, type: "spring" }}
							style={{
								border: `2px solid ${getVar(notification.color, "color")}`,
								backgroundColor: `${getVar(notification.color, "background")}`,
								color: getVar(notification.color, "color"),
							}}
							className={styles.notification}
						>
							{notification.message}
							<Button
								variant="ghost"
								className={styles.close_button}
								style={{
									color: getVar(notification.color, "color"),
								}}
								onClick={() => deleteNotification(notification.id)}
							>
								<TrashIcon />
							</Button>
						</motion.li>
					);
				})}
			</AnimatePresence>
		</ul>
	);
};
