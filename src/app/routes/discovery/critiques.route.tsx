import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { CritiquesPage } from "@pages/discovery/pages/critiques/critiques.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const critiquesRoute = createRoute({
	path: "/discovery/critiques",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<CritiquesPage />
		</PageTransition>
	),
});
