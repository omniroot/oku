import { rootRoute } from "@/app/routes/router";
import { ScreenshotsPage } from "@pages/anime/pages/screenshots/screenshots.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const animeScreenshotsRoute = createRoute({
	path: "/animes/$animeId/screenshots",
	getParentRoute: () => rootRoute,
	component: () => <ScreenshotsPage />,
});
