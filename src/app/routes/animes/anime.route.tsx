import { rootRoute } from "@/app/routes/router";
import { AnimePage } from "@pages/anime/anime.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const animeRoute = createRoute({
	path: "/animes/$animeId",
	getParentRoute: () => rootRoute,
	component: () => <AnimePage />,
});
