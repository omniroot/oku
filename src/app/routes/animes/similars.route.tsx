import { rootRoute } from "@/app/routes/router";
import { SimilarsPage } from "@pages/anime/pages/similars/similars.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const animeSimilarsRoute = createRoute({
	path: "/animes/$animeId/similars",
	getParentRoute: () => rootRoute,
	component: () => <SimilarsPage />,
});
