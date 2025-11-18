import type { IGetUser } from "@features/users/api/getUsers/getUsers.api.ts";
import type { FC } from "react";
import styles from "./SearchUserCard.module.css";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import dayjs from "dayjs";
import { Link } from "@tanstack/react-router";

interface IProps {
	user: IGetUser;
}

export const SearchUserCard: FC<IProps> = ({ user }) => {
	const lastOnline = dayjs(user.lastOnlineAt).fromNow();
	return (
		<Link
			to="/users/$userId"
			params={{ userId: user.id }}
			className={styles.search_user_card}
		>
			<ImageView src={user.avatarUrl || "404.png"} className={styles.avatar} />
			<div>
				<Typography variant="title">{user.nickname}</Typography>
				<Badge>{lastOnline}</Badge>
			</div>
		</Link>
	);
};
