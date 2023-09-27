/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: null,
  theme: {
    extend: {
      boxShadow: {
        card: "4px 4px 4px #dee3f3",
      },
      backgroundColor: {
        "custom-white-17": "rgba(255, 255, 255, 0.17)",
        "custom-white-4": "rgba(235, 235, 235, 0.4)",
      },
      screens: {
        xs: "375px",
      },
      fontFamily: {
        sans: ["var(--font-fredoka)", ...defaultTheme.fontFamily.sans],
        // dela: ['var(--font-dela)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#000000",
        "red-main": "#ED1C24",
        "yellow-pale": "#FFF7BA",
        "orange-main": "#FF8C29",
        "purple-main": "#DC7EE0",
        "gray-light": "#EFEFEF",
        "yellow-light": "#FFEB00",
        "yellow-dark": "#F1D959",
        "green-dark": "#509164",
        "green-darker": "#17770F",
        "green-light": "#EEF7DC",
        "magenta-main": "#E22D79",
        "lemon-stick": "#faf7e0",
        "orange-main": "#FF8822",
      },
      backgroundImage: {
        "triangle-yellow": "url('/static/image/yellow-triangle.svg')",
        "triangle-yellow-reverse":
          "url('/static/image/triangle-yellow-reverse.svg')",
        "white-gray": "url('/static/bg/white-gray-cropped.png')",
        "horse-shoe": "url('/static/icons/horse_shoe.svg')",
      },
      borderRadius: {
        full: "964.21px", // You can use any value you want here
      },
      rotate: {
        11: "11deg",
      },
    },
  },
  plugins: [],
};
