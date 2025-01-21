import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { DiscoveryPage } from "@pages/discovery/discovery.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const discoveryRoute = createRoute({
	path: "/discovery/",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<DiscoveryPage />
		</PageTransition>
	),
});
