import { DiscoveryIcon } from "@/shared/assets/icons/DiscoveryIcon.tsx";
import { HomeIcon } from "@/shared/assets/icons/HomeIcon.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Link } from "@tanstack/react-router";
import styles from "./BottomNavigation.module.css";
import { UserIcon } from "@/shared/assets/icons/UserIcon.tsx";

export const BottomNavigation = () => {
	return (
		<div className={styles.bottom_navigation}>
			<div className={styles.left}>
				<Link to="/" className={styles.item} activeProps={{ className: styles.active }}>
					<HomeIcon />
					<Typography>Home</Typography>
				</Link>
			</div>

			<div className={styles.center}>
				<Link to="/discovery" className={styles.item} activeProps={{ className: styles.active }}>
					<DiscoveryIcon />
					<Typography>Discovery</Typography>
				</Link>
			</div>
			<div className={styles.right}>
				<Link
					to="/users/$userId"
					params={{ userId: "1026254" }}
					className={styles.item}
					activeProps={{ className: styles.active }}
				>
					<UserIcon />
					<Typography>omniroot</Typography>
				</Link>
			</div>
		</div>
	);
};
