import { rootRoute } from "@/app/routes/router";
import { FavoritesPage } from "@pages/user/pages/achievements/achievements.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userFavoritesRoute = createRoute({
	path: "/users/$userId/favorites",
	getParentRoute: () => rootRoute,
	component: () => <FavoritesPage />,
});
