import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { useGetUser } from "@features/users/api/getUser/getUser.api.ts";
import styles from "./HelloWidget.module.css";
import { Typography } from "@components/ui/Typography/Typography.tsx";
export const HelloWidget = () => {
	const { userId } = useAuth();
	const { data: user } = useGetUser({ variables: { userId: Number(userId) } });
	return (
		<div className={styles.hello_widget}>
			<Typography size="medium" weight="title">
				Hello, {user?.nickname}!
			</Typography>
		</div>
	);
};
