/** @type {import('tailwindcss').Config} */
export default {

	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"sans": ["Poppins", "sans-serif" /*, "system-ui"*/], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},
			colors: {
				// Modo Claro (Day)
				day: {
					main: '#C75E90', // Main Color
					secondary: '#8E345F', // Hover/Secondary
					background: '#FBF5F8', // Day Background
					input: '#D9D9D9', // Input
					text: '#232323', // Day Text
					// subtitles: '#696969', // Subtitles
				},
				// Modo Oscuro (Night)
				night: {
					backgroundCard: '#161616', // Night Version
					background: '#1D1D1D', // Card Background
					text: '#FFFFFF', // Night Text
					subtitles: '#696969', // Subtitles
				},
			},

		},
		backgroundImage: {
			"close-menu": "url('/icon-close.svg')",
			"open-menu": "url('/icon-hamburger.svg')",
		},
	},
	plugins: [require('tailwindcss-animate')],
}
