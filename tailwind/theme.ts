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
} as const;

const letterSpacing = {
  wider: '.25em',
  widest: '.9em',
} as const;

const screens = {
  sm: '680px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export default {
  extend: {
    fontFamily,
    colors,
    letterSpacing,
    screens,
  },
} satisfies Config['theme'];
