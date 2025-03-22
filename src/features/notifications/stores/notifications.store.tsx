import { atom, useAtom } from "jotai";

interface INotification {
	id: string;
	message: string;
}

type INotificationWithoutId = Omit<INotification, "id">;

const notificationsAtom = atom<INotification[]>([]);

export const useNotifications = () => {
	const [notifications, setNotifications] = useAtom(notificationsAtom);

	const addNotification = (notification: INotificationWithoutId) => {
		setNotifications((prev) => [...prev, { ...notification, id: crypto.randomUUID() }]);
	};

	const deleteNotification = (id: String) => {
		setNotifications((prev) => prev.filter((item) => item.id !== id));
	};

	return { notifications, addNotification, deleteNotification };
};
