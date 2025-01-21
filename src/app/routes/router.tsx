import { GlobalLayout } from "@/app/layouts/global/global.layout.tsx";
import { animeRoute } from "@/app/routes/animes/anime.route.tsx";
import { animeScreenshotsRoute } from "@/app/routes/animes/screenshots.route.tsx";
import { animeSimilarsRoute } from "@/app/routes/animes/similars.route.tsx";
import { discoveryRoute } from "@/app/routes/discovery/discovery.route.tsx";
import { loginRoute } from "@/app/routes/login/login.route.tsx";
import { userAchievementsRoute } from "@/app/routes/users/achievements.route.tsx";
import { userFavoritesRoute } from "@/app/routes/users/favorites.route.tsx";
import { userFriendsRoute } from "@/app/routes/users/friends.route.tsx";
import { userRoute } from "@/app/routes/users/user.route";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { HomePage } from "@pages/home/home.page.tsx";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
	component: () => <GlobalLayout />,
});

// Home Page
const indexRoute = createRoute({
	path: "/",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<HomePage />
		</PageTransition>
	),
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	userRoute,
	userFriendsRoute,
	userAchievementsRoute,
	userFavoritesRoute,
	discoveryRoute,
	animeRoute,
	animeSimilarsRoute,
	animeScreenshotsRoute,
	loginRoute,
]);

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultNotFoundComponent: () => <NotFoundPage />,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
