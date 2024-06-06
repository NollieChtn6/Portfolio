/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{html,js}'
  ],
  prefix: "",
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      'slate': {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617',
      },
      'woodsmoke': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#1a1a1a',
      },
      'royal-blue': {
        '50': '#eef2ff',
        '100': '#e0e8ff',
        '200': '#c6d4ff',
        '300': '#a4b6fd',
        '400': '#7f8ffa',
        '500': '#535bf2',
        '600': '#4844e7',
        '700': '#3d36cc',
        '800': '#332ea5',
        '900': '#2e2d82',
        '950': '#1c1a4c',
      },
      'heather': {
        '50': '#f5f7f9',
        '100': '#e8ebf1',
        '200': '#d7dde6',
        '300': '#b5c0d0',
        '400': '#9ba9bf',
        '500': '#8390ae',
        '600': '#717c9f',
        '700': '#656d90',
        '800': '#565c77',
        '900': '#474c61',
        '950': '#2e313d',
      },
      'pumice': {
        '50': '#f7f7f6',
        '100': '#ebeeea',
        '200': '#ccd3ca',
        '300': '#b6c1b4',
        '400': '#8e9d8b',
        '500': '#6e7d6a',
        '600': '#586554',
        '700': '#465144',
        '800': '#3b4239',
        '900': '#313730',
        '950': '#181c17',
      },
      'linen': {
        '50': '#fbf6f1',
        '100': '#f5e8dd',
        '200': '#ebd1bd',
        '300': '#deb193',
        '400': '#d08a67',
        '500': '#c56e4a',
        '600': '#b85a3e',
        '700': '#994735',
        '800': '#7b3b31',
        '900': '#64322a',
        '950': '#351815',
      },
      'vanilla-ice': {
        '50': '#fbf5f6',
        '100': '#f8ebed',
        '200': '#eed3d9',
        '300': '#e5bcc5',
        '400': '#d696a5',
        '500': '#c37086',
        '600': '#ac526f',
        '700': '#90405c',
        '800': '#793850',
        '900': '#683348',
        '950': '#391824',
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
      backgroundImage: {
        'custom-gradient': `repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),
                            repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),
                            linear-gradient(90deg, hsl(194,74%,30%),hsl(266,74%,30%),hsl(338,74%,56%),hsl(50,74%,30%),hsl(122,74%,30%))`,
      },
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
            width: "70%",
            visibility: "display",
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          }
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
		        "transform": "translatey(0px)",
          },
          "50%": {
            "box-shadow": "0 25px 15px 0px rgba(0,0,0,0.4)",
		        "transform": "translatey(-20px)",
          },
          "100%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.8)",
		        "transform": "translatey(-0px)",
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "typing": "typing 3s steps(22), blink .5s step-end infinite alternate",
        "floating": "float 4s ease-in-out infinite",
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
}
