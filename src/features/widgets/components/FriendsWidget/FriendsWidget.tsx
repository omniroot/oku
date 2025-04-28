import { ListView } from "@components/ui/ListView/ListView.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { useGetUserFriends } from "@features/users/api/getUserFriends/getUserFriends.api.ts";
import { UserItem } from "@features/users/components/UserItem/UserItem.tsx";
import styles from "./FriendsWidget.module.css";

export const FriendsWidget = () => {
	const { userId } = useAuth();
	const { data: friends, isLoading } = useGetUserFriends({ variables: { userId: Number(userId) } });

	if (isLoading) return <Loader />;
	if (!friends) return null;
	return (
		<div className={styles.friends_widget}>
			{friends.map((friend) => {
				return (
					<ListView>
						<UserItem
							id={String(friend.id)}
							avatar={friend.image.x160}
							lastOnline={friend.last_online_at}
							title={friend.nickname}
						/>
					</ListView>
				);
			})}
		</div>
	);
};
