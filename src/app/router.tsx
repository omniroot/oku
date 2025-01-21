import { GlobalLayout } from "@/app/layouts/global/global.layout.tsx";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { AnimePage } from "@pages/anime/anime.page.tsx";
import { ScreenshotsPage } from "@pages/anime/pages/screenshots/screenshots.page.tsx";
import { SimilarsPage } from "@pages/anime/pages/similars/similars.page.tsx";
import { DiscoveryPage } from "@pages/discovery/discovery.page.tsx";
import { HomePage } from "@pages/home/home.page.tsx";
import { LoginPage } from "@pages/login/login.page.tsx";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { FavoritesPage } from "@pages/user/pages/achievements/achievements.page.tsx";
import { AchievementsPage } from "@pages/user/pages/favorites/favorites.page.tsx";
import { FriendsPage } from "@pages/user/pages/friends/friends.page.tsx";
import { UserPage } from "@pages/user/user.page.tsx";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute({
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

interface ISearchUserRoute {
	status?: IUserRateStatus;
}

const userRoute = createRoute({
	path: "/users/$userId",
	getParentRoute: () => rootRoute,
	validateSearch: (search: Record<string, unknown>): ISearchUserRoute => {
		return {
			status: (search?.status as IUserRateStatus) || "watching",
		};
	},
	component: () => (
		<PageTransition>
			<UserPage />
		</PageTransition>
	),
});

const userFriendsRoute = createRoute({
	path: "/users/$userId/friends",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<FriendsPage />
		</PageTransition>
	),
});

const userAchievementsRoute = createRoute({
	path: "/users/$userId/achievements",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<AchievementsPage />
		</PageTransition>
	),
});

const userFavoritesRoute = createRoute({
	path: "/users/$userId/favorites",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<FavoritesPage />
		</PageTransition>
	),
});

const animeRoute = createRoute({
	path: "/animes/$animeId",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<AnimePage />
		</PageTransition>
	),
});

const animeSimilarsRoute = createRoute({
	path: "/animes/$animeId/similars",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<SimilarsPage />
		</PageTransition>
	),
});

const animeScreenshotsRoute = createRoute({
	path: "/animes/$animeId/screenshots",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<ScreenshotsPage />
		</PageTransition>
	),
});

const discoveryRoute = createRoute({
	path: "/discovery/",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<DiscoveryPage />
		</PageTransition>
	),
});

interface ILoginCodeRoute {
	code?: string;
}

const loginRoute = createRoute({
	path: "/login",
	getParentRoute: () => rootRoute,
	validateSearch: (search: Record<string, unknown>): ILoginCodeRoute => {
		return {
			code: search?.code as string,
		};
	},
	component: () => (
		<PageTransition>
			<LoginPage />
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
