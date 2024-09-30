/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        crocante: ["Crocante", ...defaultTheme.fontFamily.sans],
        avenir: ["Avenir", ...defaultTheme.fontFamily.sans],
        brandon: ["Brandon", ...defaultTheme.fontFamily.sans],
        circularStd: ["CircularStd", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-white": "#fff",
        "custom-white-100": "#F6F6F6",
        "custom-white-400": "#EdECE9",
        "custom-white-500": "#EEECE7",
        "custom-black": "#000",
        "custom-black-100": "#040404",
        "custom-black-400": "#262626",
        "custom-black-500": "#474747",
        "custom-black-600": "#414141",
        "custom-black-700": "#4D4D4D",
        "custom-gray-100": "#EDECE8",
        "custom-gray-500": "#636363",
        "custom-gray-800": "#B1B1B1",
        "custom-yellow": "#FFD270",
        "custom-orange": "#FF7F41",
        "custom-orange-400": "#FF6a5b",
      },
      screens: {
        "2xl": "1750px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
