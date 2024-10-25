import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				"black-100": '#1F1F1F',
				"black-200": '#333333',
				"black-300": "#5e5e5e",
				"bg-100": "#FAFAFA",
				"bg-200": "#EFEFEF",
				blue: "#5E8EFF",
				"blue-hover": "#4375E0",
				"table-text": "#737379",
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
				space: ['Space Grotesk', 'sans-serif']
			}	
		}
	},

	plugins: []
} as Config;
