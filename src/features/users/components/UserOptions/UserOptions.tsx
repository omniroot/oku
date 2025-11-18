import { CupIcon } from "@/shared/assets/icons/CupIcon.tsx";
import { HeartIcon } from "@/shared/assets/icons/HeartIcon.tsx";
import { UsersIcon } from "@/shared/assets/icons/UsersIcon.tsx";
import { ListView } from "@components/ui/ListView/ListView.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import styles from "./UserOptions.module.css";

interface IUserOptionsProps {
	userId: string;
}
export const UserOptions: FC<IUserOptionsProps> = ({ userId }) => {
	return (
		<div className={styles.user_options}>
			<ListView>
				<Link className={styles.option} to="/users/$userId/friends" params={{ userId }}>
					<UsersIcon />
					<Typography variant="body" size="large">
						friends
					</Typography>
				</Link>
				<Link className={styles.option} to="/users/$userId/favorites" params={{ userId }}>
					<HeartIcon />
					<Typography variant="body" size="large">
						favorites
					</Typography>
				</Link>
				<Link
					className={styles.option}
					to="/users/$userId/achievements"
					params={{ userId }}
				>
					<CupIcon />
					<Typography variant="body" size="large">
						achievements
					</Typography>
				</Link>
			</ListView>
		</div>
	);
};
