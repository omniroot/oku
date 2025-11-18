import { Badge } from "@components/ui/Badge/Badge.tsx";
import { ImageView } from "@components/ui/ImageView/ImageView.tsx";
import { Tooltip } from "@components/ui/Tooltip/Tooltip.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import type { FC } from "react";
import styles from "./UserItem.module.css";

interface IProps {
	id: string;
	avatar?: string;
	title?: string;
	lastOnline?: string;
	variant?: "mini" | "normal";
}

export const UserItem: FC<IProps> = ({
	id,
	avatar,
	title,
	lastOnline,
	variant = "normal",
}) => {
	const _lastOnline = dayjs(lastOnline).fromNow();
	const _userOnline = lastOnline === "сейчас на сайте" ? "Online" : "Offline";

	return (
		<Link
			to="/users/$userId"
			params={{ userId: id }}
			className={styles.useritem}
			data-variant={variant}
		>
			<ImageView src={avatar || ""} className={styles.avatar} />
			<Typography variant="title" size={variant === "mini" ? "medium" : "large"}>
				{title}
			</Typography>

			<Tooltip
				title={_lastOnline}
				style={variant === "mini" ? { position: "absolute", right: 10, bottom: 40 } : {}}
			>
				<Badge>{_userOnline}</Badge>
			</Tooltip>
		</Link>
	);
};
