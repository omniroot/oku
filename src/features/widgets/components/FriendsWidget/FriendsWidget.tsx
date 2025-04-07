import { Typography } from "@components/ui/Typography/Typography.tsx";
import styles from "./FriendsWidget.module.css";
import { useGetUserFriends } from "@features/users/api/getUserFriends/getUserFriends.api.ts";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import dayjs from "dayjs";

export const FriendsWidget = () => {
	const { userId } = useAuth();
	const { data: friends, isLoading } = useGetUserFriends({ variables: { userId: Number(userId) } });

	if (isLoading) return <Loader />;
	if (!friends) return null;
	return (
		<div className={styles.friends_widget}>
			{friends.map((friend) => {
				return (
					<div className={styles.friend}>
						<ImageView src={friend.image.x160} className={styles.avatar} />
						<div className={styles.info}>
							<div className={styles.line}>
								<Typography variant="title">{friend.nickname}</Typography>
								<Badge className={styles.badge}>{dayjs(friend.last_online_at).fromNow()}</Badge>
							</div>
							{/* <div className={styles.line}></div> */}
						</div>
					</div>
				);
			})}
		</div>
	);
};
