import { GlobalLayout } from "@/components/layouts/global.layout.tsx";
import { HomePage } from "@/pages/home.page.tsx";
import { LoginPage } from "@/pages/login.page.tsx";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: () => <GlobalLayout />,
});

export const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

export const LoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <LoginPage />,
});

const routeTree = rootRoute.addChildren([HomeRoute, LoginRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  // defaultNotFoundComponent: () => <NotFoundPage />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
