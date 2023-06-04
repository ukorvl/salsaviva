const colors = require('./tailwind/colors');
const corePlugins = require('./tailwind/corePlugins');
const fontFamily = require('./tailwind/fontFamily');

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
    },
  },
  corePlugins: corePlugins,
};
