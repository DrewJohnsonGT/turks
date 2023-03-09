/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        logo: '#1d306e',
        white: '#ffffff',
        main: {
          50: '#ecf6ff',
          100: '#dceeff',
          200: '#c1dfff',
          300: '#9bc8ff',
          400: '#73a7ff',
          500: '#5385ff',
          600: '#345ef7',
          700: '#274adb',
          800: '#2341b0',
          900: '#1d306e',
        },
        secondary: {
          50: '#fcfbf7',
          100: '#f9f0d6',
          200: '#f3daaa',
          300: '#e0b375',
          400: '#cb8747',
          500: '#b06529',
          600: '#924b1a',
          700: '#6f3816',
          800: '#4c2611',
          900: '#30170b',
        },
      },
    },
  },
  darkMode: 'class',
};
