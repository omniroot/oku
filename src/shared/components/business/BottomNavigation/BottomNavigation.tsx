import { HomeIcon } from "@/shared/assets/icons/HomeIcon.tsx";
import { LoginIcon } from "@/shared/assets/icons/LoginIcon.tsx";
import { SearchIcon } from "@/shared/assets/icons/SearchIcon.tsx";
import { UserIcon } from "@/shared/assets/icons/UserIcon.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { Link } from "@tanstack/react-router";
import styles from "./BottomNavigation.module.css";

export const BottomNavigation = () => {
	const { userId, isAuthorized } = useAuth();

	return (
		<div className={styles.bottom_navigation}>
			<Link
				to="/"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<HomeIcon width={20} height={20} />
			</Link>
			<Link
				to="/discovery"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				{/* <DiscoveryIcon width={20} height={20} /> */}
				<SearchIcon width={20} />
			</Link>
			{isAuthorized ? (
				<Link
					to="/users/$userId"
					params={{ userId: String(userId) }}
					className={styles.bottom_navigation_item}
					activeProps={{ className: styles.active, id: "active_bn" }}
				>
					<UserIcon width={20} height={20} />
				</Link>
			) : (
				<Link
					to="/login"
					className={styles.bottom_navigation_item}
					activeProps={{ className: styles.active, id: "active_bn" }}
				>
					<LoginIcon width={20} height={20} />
				</Link>
			)}
		</div>
	);
};
