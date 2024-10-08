/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: 'scrollbar-width: none; -ms-overflow-style: none;',
      }
    },
  },
  plugins: [],
}