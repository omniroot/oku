import { ListView } from "@components/ui/ListView/ListView.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { useGetUserFriends } from "@features/users/api/getUserFriends/getUserFriends.api.ts";
import { UserItem } from "@features/users/components/UserItem/UserItem.tsx";

export const FriendsWidget = () => {
	const { userId } = useAuth();
	const { data: friends, isLoading } = useGetUserFriends({ variables: { userId: Number(userId) } });

	if (isLoading) return <Loader />;
	if (!friends) return null;
	return (
		<ListView orientation="horizontal">
			{friends.map((friend) => {
				return (
					<UserItem
						id={String(friend.id)}
						avatar={friend.image.x160}
						lastOnline={friend.last_online_at}
						title={friend.nickname}
						variant="mini"
					/>
				);
			})}
		</ListView>
	);
};
