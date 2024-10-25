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
				"bg-200": "#EFEFEF"
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
