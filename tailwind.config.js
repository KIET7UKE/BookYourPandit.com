/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'choclaty': '#3c1b04',
        'dark-choclaty': '#47290d',
        'sexy1': '#e65c00',
        'sexy2': '#f9d423',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

