import { NotificationsLayout } from "@/app/layouts/notifications/notifications.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { HeartIcon } from "@/shared/assets/icons/HeartIcon.tsx";
import { HomeIcon } from "@/shared/assets/icons/HomeIcon.tsx";
import "@/shared/components/ui/UIProvider/UIProvider.module.css";
import { ModernBottomNavigation } from "@components/business/ModernBottomNavigation/ModernBottomNavigation.tsx";
import { FAB } from "@components/ui/FAB/FAB.tsx";
import { FABLayout } from "@components/ui/FABLayout/FABLayout.tsx";
import { Header } from "@components/ui/Header/Header.tsx";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { Outlet } from "@tanstack/react-router";

export const GlobalLayout = () => {
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
			<ModernBottomNavigation />
			<SearchLayout />
			<FABLayout>
				<FAB variant="secondary" size="small">
					<HeartIcon />
					heart
				</FAB>
				<FAB variant="primary">
					<HomeIcon />
					whefhweifoheow
				</FAB>
			</FABLayout>
		</>
	);
};
