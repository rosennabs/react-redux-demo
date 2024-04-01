/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {},
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    amber: colors.amber,
    blue: colors.blue,
    red: colors.red,
    green: colors.green,
  },
  container: {
    center: true,
  },
  plugins: [],
};

