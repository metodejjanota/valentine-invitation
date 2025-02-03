import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#EC558C",

					secondary: "#ba0000",

					accent: "#ec89a7",

					neutral: "#f5e3c9",

					"base-100": "#2A224A",

					info: "#00e6ff",

					success: "#00eaab",

					warning: "#e57500",

					error: "#db003a",
				},
			},
		],
	},
	plugins: [require("daisyui")],
} satisfies Config;
