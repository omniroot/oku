import { rootRoute } from "@/app/routes/router";
import { FriendsPage } from "@pages/user/pages/friends/friends.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userFriendsRoute = createRoute({
	path: "/users/$userId/friends",
	getParentRoute: () => rootRoute,
	component: () => <FriendsPage />,
});
