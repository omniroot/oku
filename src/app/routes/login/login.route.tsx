import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { LoginPage } from "@pages/login/login.page.tsx";
import { createRoute } from "@tanstack/react-router";

interface ILoginCodeRoute {
	code?: string;
}

export const loginRoute = createRoute({
	path: "/login",
	getParentRoute: () => rootRoute,
	validateSearch: (search: Record<string, unknown>): ILoginCodeRoute => {
		return {
			code: search?.code as string,
		};
	},
	component: () => (
		<PageTransition>
			<LoginPage />
		</PageTransition>
	),
});
