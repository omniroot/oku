import { router } from "@/app/routes/router.tsx";
import { CONSTS } from "@/shared/consts/consts.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

dayjs().locale("en");
dayjs.extend(relativeTime);

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchInterval: CONSTS.REFETCH_INTERVAL,
			staleTime: CONSTS.STALE_TIME,
			refetchOnWindowFocus: false,
			retryDelay: 1000,
			retry: 2,
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
