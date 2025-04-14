import { rootRoute } from "@/app/routes/router";
import { SettingsPage } from "@pages/settings/settings.page";
import { createRoute } from "@tanstack/react-router";

export const settingsRoute = createRoute({
	path: "/settings",
	getParentRoute: () => rootRoute,

	component: () => <SettingsPage />,
});
