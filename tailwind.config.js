/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Raleway", "serif"],
    },
    colors: {
      white: "#FFFFFF",
      blue: "#2F80ED",
      red: "#EB5757",
      primary: "#333333",
      gray: "#828282",
      "light-gray": "#BDBDBD",
    },
    extend: {},
  },
  plugins: [],
};
