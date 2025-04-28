import { Link } from "@tanstack/react-router";
import { FC } from "react";
import styles from "./UserItem.module.css";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import dayjs from "dayjs";
import { Tooltip } from "@components/ui/Tooltip/Tooltip.tsx";

interface IProps {
	id: string;
	avatar?: string;
	title?: string;
	lastOnline?: string;
}

export const UserItem: FC<IProps> = ({ id, avatar, title, lastOnline }) => {
	const _lastOnline = dayjs(lastOnline).fromNow();
	const _userOnline = lastOnline === "сейчас на сайте" ? "Online" : "Offline";

	return (
		<Link to="/users/$userId" params={{ userId: id }} className={styles.useritem}>
			<ImageView src={avatar || ""} className={styles.avatar} />
			{/* <div className={styles.info}> */}
			<Typography variant="title" size="large">
				{title}
			</Typography>
			<Tooltip title={_lastOnline}>
				<Badge>{_userOnline}</Badge>
			</Tooltip>
			{/* </div> */}
		</Link>
	);
};
