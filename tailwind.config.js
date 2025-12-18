/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dog-primary': '#FF9F43',
        'dog-secondary': '#FECA57',
        'dog-bg': '#FFF2D9',
        'dog-text': '#543C32',
      }
    },
  },
  plugins: [],
}
