/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        "cs-lightgray": "#f0eaea",
        "cs-darkgray": "#918a8a",
        "cs-red": "#f32c2c",
        "cs-lightblack": "#444040",
        "cs-purple": "#9c219c",
        "cs-blue": "#97e5df",
      },
    },
    fontFamily: {
      "cs-sans": ["Exo 2", "sans-serif"],
    },
  },
  plugins: [],
};
