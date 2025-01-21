import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { ScreenshotsPage } from "@pages/anime/pages/screenshots/screenshots.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const animeScreenshotsRoute = createRoute({
	path: "/animes/$animeId/screenshots",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<ScreenshotsPage />
		</PageTransition>
	),
});
