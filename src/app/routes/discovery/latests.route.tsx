import { rootRoute } from "@/app/routes/router";
import { LatestPage } from "@pages/discovery/pages/latests/latests.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const latestsRoute = createRoute({
	path: "/discovery/latests",
	getParentRoute: () => rootRoute,
	component: () => <LatestPage />,
});
