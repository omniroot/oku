import { rootRoute } from "@/app/routes/router";
import { OngoingsPage } from "@pages/discovery/pages/ongoings/ongoings.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const ongoingsRoute = createRoute({
	path: "/discovery/ongoings",
	getParentRoute: () => rootRoute,
	component: () => <OngoingsPage />,
});
