import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { FavoritesPage } from "@pages/user/pages/achievements/achievements.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userFavoritesRoute = createRoute({
	path: "/users/$userId/favorites",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<FavoritesPage />
		</PageTransition>
	),
});
