const colors = require('./tailwind/colors');
const container = require('./tailwind/container');
const fontFamily = require('./tailwind/fontFamily');
const letterSpacing = require('./tailwind/letterSpacing');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: fontFamily,
      colors: colors,
      letterSpacing: letterSpacing,
    },
    container: container,
  },
};
