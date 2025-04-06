import { UserIcon } from "@/shared/assets/icons/UserIcon.tsx";
import { Divider } from "@components/ui/Divider/Divider.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { UserRates } from "@features/userRates/components/UserRates/UserRates.tsx";
import { useGetUser } from "@features/users/api/getUser/getUser.api.ts";
import { UserCard } from "@features/users/components/UserCard/UserCard.tsx";
import { UserOptions } from "@features/users/components/UserOptions/UserOptions.tsx";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./user.page.module.css";

export const UserPage = () => {
	const { setTitle, setIcon } = useHeader();
	const { status } = getRouteApi("/users/$userId").useSearch();
	const { userId } = getRouteApi("/users/$userId").useParams();

	const { data: user } = useGetUser({ variables: { userId: Number(userId) } });

	useEffect(() => {
		setTitle("User");
		setIcon(<UserIcon />);
	}, [setIcon, setTitle]);

	// if (!user) return null;

	return (
		<div className={styles.page} style={{ display: "flex", flexDirection: "column" }}>
			{user && (
				<>
					<UserCard user={user} />
					<Divider />
					<UserOptions user={user} />
					<Divider />
				</>
			)}
			<UserRates userId={userId} status={status || "watching"} />
		</div>
	);
};
