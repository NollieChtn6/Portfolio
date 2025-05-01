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
      "wine-berry": {
        50: "#faf5f9",
        100: "#f7ecf4",
        200: "#f1d9eb",
        300: "#e6bbd9",
        400: "#d591bf",
        500: "#c56fa6",
        600: "#b0528a",
        700: "#973f72",
        800: "#7d375e",
        900: "#6a3151",
        950: "#501f3a",
      },
      hibiscus: {
        50: "#fcf3f8",
        100: "#fbe8f2",
        200: "#f9d1e7",
        300: "#f5acd2",
        400: "#ed79b3",
        500: "#e35195",
        600: "#cb2d6f",
        700: "#b5215b",
        800: "#961e4b",
        900: "#7d1e41",
        950: "#4c0b23",
      },
      iron: {
        50: "#f7f7f7",
        100: "#ededed",
        200: "#dfdfdf",
        300: "#cccccc",
        400: "#adadad",
        500: "#999999",
        600: "#888888",
        700: "#7b7b7b",
        800: "#676767",
        900: "#545454",
        950: "#363636",
      },
      "persian-green": {
        50: "#f0fdfa",
        100: "#cef9f1",
        200: "#9cf3e5",
        300: "#63e5d5",
        400: "#33cebf",
        500: "#1ab2a6",
        600: "#14a098",
        700: "#13726e",
        800: "#145b59",
        900: "#154c4a",
        950: "#062c2d",
      },
      firefly: {
        50: "#effcfc",
        100: "#d7f6f6",
        200: "#b4eced",
        300: "#80dee0",
        400: "#45c6cb",
        500: "#2aaab0",
        600: "#258a95",
        700: "#256f79",
        800: "#265b64",
        900: "#234d56",
        950: "#0f292f",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
            visibility: "display",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        flicker: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        float: {
          "0%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.8)",
            transform: "translatey(0px)",
          },
          "50%": {
            "box-shadow": "0 25px 15px 0px rgba(0,0,0,0.4)",
            transform: "translatey(-20px)",
          },
          "100%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.8)",
            transform: "translatey(-0px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 3s steps(22), blink .5s step-end infinite alternate",
        floating: "float 2s ease-in-out infinite",
        "flickering-xs": "flicker 1.5s infinite",
        "flickering-sm": "flicker 2s infinite",
        "flickering-md": "flicker 1.3s infinite",
        "flickering-lg": "flicker 1.5s infinite",
        "flickering-xlg": "flicker 1.9s infinite",
        "flickering-xxlg": "flicker 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
