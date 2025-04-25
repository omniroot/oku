import { CupIcon } from "@/shared/assets/icons/CupIcon.tsx";
import { HeartIcon } from "@/shared/assets/icons/HeartIcon.tsx";
import { UsersIcon } from "@/shared/assets/icons/UsersIcon.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { IUser } from "@features/users/api/getUser/getUser.types.ts";
import { Link } from "@tanstack/react-router";
import { FC } from "react";
import styles from "./UserOptions.module.css";

interface IUserOptionsProps {
	user: IUser;
}
export const UserOptions: FC<IUserOptionsProps> = ({ user }) => {
	return (
		<div className={styles.user_options}>
			<Link
				className={styles.option}
				to="/users/$userId/friends"
				params={{ userId: String(user.id) }}
			>
				<UsersIcon />
				<Typography variant="body" size="large">
					friends
				</Typography>
			</Link>
			<Link
				className={styles.option}
				to="/users/$userId/favorites"
				params={{ userId: String(user.id) }}
			>
				<HeartIcon />
				<Typography variant="body" size="large">
					favorites
				</Typography>
			</Link>
			<Link
				className={styles.option}
				to="/users/$userId/achievements"
				params={{ userId: String(user.id) }}
			>
				<CupIcon />
				<Typography variant="body" size="large">
					achievements
				</Typography>
			</Link>
		</div>
	);
};
