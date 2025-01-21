import { UsersIcon } from "@/shared/assets/icons/UsersIcon.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useGetUserFriends } from "@features/users/api/getUserFriends/getUserFriends.api.ts";
import { getRouteApi, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./friends.page.module.css";
import { Loader } from "@components/ui/Loader/Loader.tsx";

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
			{friends?.map((friend) => {
				return (
					<Link className={styles.user} to="/users/$userId" params={{ userId: String(friend.id) }}>
						<img src={friend.image.x160} className={styles.avatar} />
						<Typography>{friend.nickname}</Typography>
					</Link>
				);
			})}
		</div>
	);
};
