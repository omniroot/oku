import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { FriendsPage } from "@pages/user/pages/friends/friends.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const userFriendsRoute = createRoute({
	path: "/users/$userId/friends",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<FriendsPage />
		</PageTransition>
	),
});
