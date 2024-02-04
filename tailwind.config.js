/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Montserrat", 'sans-serif'],
    },
    boxShadow: {
      '3xl': '0 90px 90px -90px rgba(0, 0, 0, 0.4)',
    }
  },
  plugins: [],
}