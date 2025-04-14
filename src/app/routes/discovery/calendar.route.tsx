import { rootRoute } from "@/app/routes/router.tsx";
import { CalendarPage } from "@pages/discovery/pages/calendar/calendar.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const calendarRoute = createRoute({
	path: "/discovery/calendar",
	getParentRoute: () => rootRoute,
	component: () => <CalendarPage />,
});
