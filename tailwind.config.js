/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{html,js}",
  ],
  prefix: "",
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      ink: "#10133b",
      chalk: "#fff7ea",
      tangerine: "#ff6a2b",
      ultra: "#2a35e8",
      lime: "#c8f169",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
