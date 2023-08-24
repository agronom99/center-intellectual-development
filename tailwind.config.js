/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xll: "1440px",
    },
    extend: {},
    backgroundColor:{
      "yelow-button": "#fae01a",
    },
    colors: {
      "home-h1": "#018fa3",
      "yelow-button": "#fae01a",
    },
    boxShadow:{
      'shadow-yelow': '0px 20px 40px -27px',
    },
    fontFamily: {
      commis: ["Commissioner"],
    },
  },
  plugins: [],
};
