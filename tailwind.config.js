/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{html,js}',
  ],
  prefix: '',
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      'royal-blue': {
        50: '#eef2ff',
        100: '#e0e8ff',
        200: '#c6d4ff',
        300: '#a4b6fd',
        400: '#7f8ffa',
        500: '#535bf2',
        600: '#4844e7',
        700: '#3d36cc',
        800: '#332ea5',
        900: '#2e2d82',
        950: '#1c1a4c',
      },

      // new palette
      'cod-gray': {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#111111',
      },
      'mine-shaft': {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#2f2f2f',
      },
      'wild-sand': {
        50: '#f6f6f6',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
      grandis: {
        50: '#fff9ed',
        100: '#fff2d4',
        200: '#ffe1a9',
        300: '#ffcb74',
        400: '#fea939',
        500: '#fc8d13',
        600: '#ed7109',
        700: '#c55609',
        800: '#9c4310',
        900: '#7e3910',
        950: '#441b06',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': `repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),
                            repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),
                            linear-gradient(90deg, hsl(194,74%,30%),hsl(266,74%,30%),hsl(338,74%,56%),hsl(50,74%,30%),hsl(122,74%,30%))`,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '70%',
            visibility: 'display',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
        flicker: {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
          '100%': {
            opacity: 1,
          },
        },
        float: {
          '0%': {
            'box-shadow': '0 5px 15px 0px rgba(0,0,0,0.8)',
            transform: 'translatey(0px)',
          },
          '50%': {
            'box-shadow': '0 25px 15px 0px rgba(0,0,0,0.4)',
            transform: 'translatey(-20px)',
          },
          '100%': {
            'box-shadow': '0 5px 15px 0px rgba(0,0,0,0.8)',
            transform: 'translatey(-0px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        typing: 'typing 3s steps(22), blink .5s step-end infinite alternate',
        floating: 'float 2s ease-in-out infinite',
        'flickering-xs': 'flicker 1.5s infinite',
        'flickering-sm': 'flicker 2s infinite',
        'flickering-md': 'flicker 1.3s infinite',
        'flickering-lg': 'flicker 1.5s infinite',
        'flickering-xlg': 'flicker 1.9s infinite',
        'flickering-xxlg': 'flicker 1s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
