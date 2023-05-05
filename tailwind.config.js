/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
        "brand": colors["orange"]["600"]
      },
      fontFamily: {
        "source": ['Source Sans Pro', "sans-serif"],
        "oswald": ["Oswald", 'sans-serif'],
        "archivo": ["Archivo Black", 'sans-serif'],
      },
      cursor: {
        "custom": ["url('/res/cursor.svg')", "url('/res/cursor.png')", "auto"]
      }
    },

  },
  plugins: [],
}

