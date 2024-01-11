/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['retro']
	}
};
