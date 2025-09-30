/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React/Vite source files
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cabin: ["Cabin Sketch", "sans-serif"],
        single: ["Single Day", "cursive"],
      },
    },
  },
  plugins: [],
};
