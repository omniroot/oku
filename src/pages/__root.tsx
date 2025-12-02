// import { TanStackDevtools } from "@tanstack/react-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { CONSTS } from "@/shared/consts/consts.ts";
import "@/styles/main.css";

import { MaterialProvider } from "@/theme/components/MaterialProvider.tsx";
import MaterialThemeStyles from "@/theme/components/MaterialStyles.css?url";
import MaterialThemeInject from "@/theme/components/MaterialThemeInject.tsx?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		scripts: [
			{
				type: "module",
				src: MaterialThemeInject,
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: MaterialThemeStyles,
			},
		],
	}),

	shellComponent: RootDocument,
});

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

dayjs().locale("en");
dayjs.extend(relativeTime);

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<QueryClientProvider client={client}>
					<MaterialProvider>{children}</MaterialProvider>
				</QueryClientProvider>
				{/* <Header /> */}
				{/* <TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/> */}
				<Scripts />
			</body>
		</html>
	);
}
