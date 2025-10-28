/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",  "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A2E35",
        accentGray: "#D8CFC4",
        accentApricot: "#f5e9d3",
        pagebg: "#FDFCF8",
        card: "#FFFFFF",
        text: "#333333",
        text2: "#7d7d7d",
        border: "#e3e2df",
        alert: "#F26868",
      },
    },
  },
  plugins: [],
};
