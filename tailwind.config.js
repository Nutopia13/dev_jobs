/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_viol: '#5964E0',
        primary_light_violet: '#939BF4',
        primary_dark_blue: '#19202D',
        primary_midnight: '#121721',
        light_grey:'F4F6F8',
        grey: '#9DAEC2',
        dark_grey: '#6E8098',
      }
    },
  },
  plugins: [],
}
