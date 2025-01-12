import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/main.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router.tsx";
import { CONSTS } from "@/shared/consts/consts.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchInterval: CONSTS.REFETCH_INTERVAL,
			staleTime: CONSTS.STALE_TIME,
			refetchOnWindowFocus: false,
			retryDelay: 1000,
			retry: 2, // TODO its temporary fix, after adding intereeceptor in api, chage it to 2-3
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
);
