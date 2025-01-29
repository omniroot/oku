import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { SettingsPage } from "@pages/settings/settings.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const settingsRoute = createRoute({
	path: "/settings",
	getParentRoute: () => rootRoute,

	component: () => (
		<PageTransition>
			<SettingsPage />
		</PageTransition>
	),
});
