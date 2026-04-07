/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'green-dark': '#2B2E1A',
				'green-mid': '#3A3D25',
				'green-light': '#4A4D33',
				'terracotta': {
					DEFAULT: '#B85C38',
					light: '#D4845F',
					dark: '#8B4429'
				},
				'maroon': {
					DEFAULT: '#800000',
					light: '#A32020'
				},
				'cream': {
					DEFAULT: '#F5F0E3',
					muted: '#D9D3C2'
				},
				'warm-white': '#FAF8F2',
				'text-muted': '#A9A48E',
				'gold': '#C8A96E'
			},
			fontFamily: {
				heading: ['"Playfair Display"', 'serif'],
				body: ['"Newsreader"', 'serif']
			}
		}
	},
	plugins: []
};
