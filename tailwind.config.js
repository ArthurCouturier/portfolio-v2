/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tigedeblug': ['Tigedeblug', 'sans-serif'],
      },
      colors: {
        coutYellow: '#f4cf77',
        coutPurple: '#2f2e6e',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}