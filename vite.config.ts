import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	test: {
		globals: true,
		environment: "jsdom",
		exclude: [
			...configDefaults.exclude,
			"./src/node_modules/**",
			"./src/dist/**",
			"./tests/*",
			"./src/main.tsx",
			".eslintrc.cjs",
			"playwright.config.js",
		],
		setupFiles: "./tests/setup.ts",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		coverage: {
			provider: "v8",
			reporter: "lcov",
			exclude: [
				"**/tests/**",
				"**/playwright.config.ts",
				"**/public/**",
				"**/vite-env.d.ts",
				"**/src/index.tsx",
				".eslintrc.cjs",
				"./src/main.tsx",
			],
		},
	},
});
