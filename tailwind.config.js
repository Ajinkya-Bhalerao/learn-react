/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}