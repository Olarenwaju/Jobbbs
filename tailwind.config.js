/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: "clashDisplay",
        clashBold: "clashDisplayBold",
        clashSemiBold: "clashDisplaySemibold",
        outfit: "outfit",
        poppins: "poppins"
      }
    },
  },
  plugins: [],
}

