/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "3px 3px 3px #dee3f3",
      },
      backgroundColor: {
        "custom-white-17": "rgba(255, 255, 255, 0.17)",
      },
      custom: {
        cta: "relative mx-auto p-2 px-5 transition-transform border-none bg-transparent group",
        "cta:before":
          "group:hover:block absolute top-0 left-0 rounded-full bg-white w-9 h-9 transition-transform transition-transform",
        "cta span": "relative font-bold text-red-600",
        "cta svg":
          "relative top-0 ml-2 fill-none stroke-current stroke-2 transform -translate-x-5 transition-transform",
        "cta:hover:before": "w-full bg-white",
        "cta:hover svg": "transform translate-x-0",
        "cta:active": "scale-95",
      },
    },
  },
  plugins: [],
};
