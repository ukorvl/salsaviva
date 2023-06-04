const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {Record<string, Array<string>>} */
module.exports = {
  sans: ['var(--font-kumbh-sans)', ...defaultTheme.fontFamily.sans],
  mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono]
};
