import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { AnimePage } from "@pages/anime/anime.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const animeRoute = createRoute({
	path: "/animes/$animeId",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<AnimePage />
		</PageTransition>
	),
});
