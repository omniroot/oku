import { GlobalLayout } from "@/app/layouts/global/global.layout.tsx";
import { HomePage } from "@pages/home/home.page.tsx";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { UserPage } from "@pages/user/user.page.tsx";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute({
	component: () => <GlobalLayout />,
});

// Home Page
const indexRoute = createRoute({
	path: "/",
	getParentRoute: () => rootRoute,
	component: () => <HomePage />,
});

const userRoute = createRoute({
	path: "/users/$userId",
	getParentRoute: () => rootRoute,
	component: () => <UserPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, userRoute]);
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
