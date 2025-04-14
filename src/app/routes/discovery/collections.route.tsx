import { rootRoute } from "@/app/routes/router";
import { CollectionsPage } from "@pages/discovery/pages/collections/collections.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const collectionsRoute = createRoute({
	path: "/discovery/collections",
	getParentRoute: () => rootRoute,
	component: () => <CollectionsPage />,
});
