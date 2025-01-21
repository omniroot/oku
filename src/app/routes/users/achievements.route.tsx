import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { AchievementsPage } from "@pages/user/pages/favorites/favorites.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userAchievementsRoute = createRoute({
	path: "/users/$userId/achievements",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<AchievementsPage />
		</PageTransition>
	),
});
