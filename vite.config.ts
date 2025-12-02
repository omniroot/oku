import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import path from "path";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export const ReactCompilerConfig = {
	target: "18", // '17' | '18' | '19'
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// MillionLint.vite({ enabled: true }),

		viteTsConfigPaths({
			// projects: ["./tsconfig.json"],
		}),
		tanstackStart({
			router: {
				routesDirectory: "pages",
			},
			prerender: {
				// Enable prerendering
				enabled: true,

				// Enable if you need pages to be at `/page/index.html` instead of `/page.html`
				autoSubfolderIndex: true,

				// If disabled, only the root path or the paths defined in the pages config will be prerendered
				autoStaticPathsDiscovery: true,

				// How many prerender jobs to run at once
				concurrency: 14,

				// Whether to extract links from the HTML and prerender them also
				crawlLinks: true,

				// Filter function takes the page object and returns whether it should prerender
				filter: ({ path }) => !path.startsWith("/do-not-render-me"),

				// Number of times to retry a failed prerender job
				retryCount: 2,

				// Delay between retries in milliseconds
				retryDelay: 1000,

				// Maximum number of redirects to follow during prerendering
				maxRedirects: 5,

				// Fail if an error occurs during prerendering
				failOnError: true,

				// Callback when page is successfully rendered
				onSuccess: ({ page }) => {
					console.log(`Rendered ${page.path}!`);
				},
			},
			// srcDirectory: "src",
			// target: ,
			// autoCodeSplitting: true,
			// routesDirectory: "./src/pages/",
			// generatedRouteTree: "./.tanstack/routeTree.gen.ts",
		}),

		nitro({
			devServer: { port: 5173 },
		}),
		react({
			// babel: {
			// 		plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
			// 	},
		}),
	],
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "src", "app", "pages"),
			"@features": path.resolve(__dirname, "src", "features"),
			"@components": path.resolve(__dirname, "src", "shared", "components"),
			"@ui": path.resolve(__dirname, "src", "shared", "components", "ui"),
			"@": path.resolve(__dirname, "src"),
			"~": path.resolve(__dirname),
		},
	},
});
