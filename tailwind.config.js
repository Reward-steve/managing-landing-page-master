/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(12, 88%, 59%)", // Orange 400
        "dark-blue": "hsl(228, 39%, 23%)", // Blue 950
        "dark-gray-blue": "hsl(233, 12%, 13%)", // Gray 950
        "pale-orange": "hsl(13, 100%, 96%)", // Orange 50
        "light-gray": "hsl(0, 0%, 98%)", // Gray 50
      },
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
