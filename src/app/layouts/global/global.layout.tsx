import { NotificationsLayout } from "@/app/layouts/notifications/notifications.layout.tsx";
import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { ModernBottomNavigation } from "@components/business/ModernBottomNavigation/ModernBottomNavigation.tsx";
import { Header } from "@components/ui/Header/Header.tsx";
import { Outlet } from "@tanstack/react-router";

export const GlobalLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			{/* <BottomNavigation /> */}
			<NotificationsLayout />
			<ModernBottomNavigation />
			<SearchLayout />
		</>
	);
};
