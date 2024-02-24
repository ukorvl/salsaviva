import type {Config} from 'tailwindcss';
import theme from './tailwind/theme';
import {removeSelectionBg} from './tailwind/removeSelectionBg';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme,
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
    removeSelectionBg,
  ],
} satisfies Config;
