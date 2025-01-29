import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { CollectionsPage } from "@pages/discovery/pages/collections/collections.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const collectionsRoute = createRoute({
	path: "/discovery/collections",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<CollectionsPage />
		</PageTransition>
	),
});
