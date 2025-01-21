import { SearchLayout } from "@/app/layouts/search/search.layout.tsx";
import { BottomNavigation } from "@components/business/BottomNavigation/BottomNavigation.tsx";
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
			<ModernBottomNavigation />
			<SearchLayout />
		</>
	);
};
