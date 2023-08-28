import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const fontFamily = {
  sans: ['var(--font-kumbh-sans)', ...defaultTheme.fontFamily.sans],
  mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
};

const colors = {
  white: '#fefefe',
  'transparent-white': 'rgba(255,255,255,0.5)',
  black: '#111111',
  primary: '#4f5bac',
  alternate: '#110728',
  accent0: '#9e2077',
  accent1: '#933293',
  accent2: '#602e87',
  accent3: '#3f71b8',
};

const letterSpacing = {
  wider: '.25em',
  widest: '.9em',
};

export default {
  extend: {
    fontFamily,
    colors,
    letterSpacing,
  },
} satisfies Config['theme'];
