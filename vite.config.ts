import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export const ReactCompilerConfig = {
	target: "18", // '17' | '18' | '19'
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// MillionLint.vite({ enabled: true }),
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
