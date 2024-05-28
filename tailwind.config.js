/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				tec: "320px",
				ite: "375px",
				sum: "412px",
			},
		},
	},
	plugins: [],
};
