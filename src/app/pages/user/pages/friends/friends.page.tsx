import { UsersIcon } from "@/shared/assets/icons/UsersIcon.tsx";
import { ListView } from "@components/ui/ListView/ListView.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useGetUserFriends } from "@features/users/api/getUserFriends/getUserFriends.api.ts";
import { UserItem } from "@features/users/components/UserItem/UserItem.tsx";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./friends.page.module.css";

export const FriendsPage = () => {
	const { setTitle, setIcon } = useHeader();
	const { userId } = getRouteApi("/users/$userId/friends").useParams();
	const { data: friends, isFetching } = useGetUserFriends({
		variables: { userId: Number(userId) },
	});

	useEffect(() => {
		setTitle("Friends");
		setIcon(<UsersIcon />);
	}, [setIcon, setTitle]);

	return (
		<div className={styles.page}>
			{isFetching && <Loader fullscreen />}
			<ListView>
				{friends?.map((friend) => {
					return (
						<UserItem
							id={String(friend.id)}
							title={friend.nickname}
							avatar={friend.image.x160}
							lastOnline={friend.last_online_at}
						/>
					);
				})}
			</ListView>
		</div>
	);
};
