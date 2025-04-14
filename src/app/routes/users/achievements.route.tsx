import { rootRoute } from "@/app/routes/router";
import { AchievementsPage } from "@pages/user/pages/favorites/favorites.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userAchievementsRoute = createRoute({
	path: "/users/$userId/achievements",
	getParentRoute: () => rootRoute,
	component: () => <AchievementsPage />,
});
