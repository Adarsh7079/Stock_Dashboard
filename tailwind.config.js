/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
}

