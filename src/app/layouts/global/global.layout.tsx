import { NotificationsLayout } from "@/app/layouts/notifications/notifications.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { CupIcon } from "@/shared/assets/icons/CupIcon.tsx";
import { HeartIcon } from "@/shared/assets/icons/HeartIcon.tsx";
import { HomeIcon } from "@/shared/assets/icons/HomeIcon.tsx";
import "@/shared/components/ui/UIProvider/UIProvider.module.css";
import { BottomNavigation } from "@components/business/BottomNavigation/BottomNavigation.tsx";
import { FAB } from "@components/ui/FAB/FAB.tsx";
import { FABLayout } from "@components/ui/FABLayout/FABLayout.tsx";
import { Header } from "@components/ui/Header/Header.tsx";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";
import { Outlet, useLocation } from "@tanstack/react-router";

export const GlobalLayout = () => {
	const { addNotification } = useNotifications();
	const isSettingsPage = useLocation().pathname === "/settings" ? true : false;

	return (
		<>
			<Header />
			<main>
				<PageTransition>
					<Outlet />
				</PageTransition>
			</main>
			{/* <BottomNavigation /> */}
			<NotificationsLayout />
			<BottomNavigation />
			<SearchLayout />
			{isSettingsPage && (
				<FABLayout>
					<FAB
						variant="tertiary"
						size="small"
						onClick={() => addNotification({ message: "Heart", color: "tertiary" })}
					>
						<CupIcon />
						cup
					</FAB>
					<FAB
						variant="secondary"
						size="normal"
						onClick={() => addNotification({ message: "Heart", color: "secondary" })}
					>
						<HeartIcon />
						heart
					</FAB>
					<FAB
						variant="primary"
						size="large"
						onClick={() => addNotification({ message: "Home", color: "primary" })}
					>
						<HomeIcon />
						Home page
					</FAB>
				</FABLayout>
			)}
		</>
	);
};
