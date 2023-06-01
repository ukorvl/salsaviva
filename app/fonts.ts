/**
 * @file Initialize page fonts.
 * These variables are used in tailwindCSS config.
 */

import {Roboto_Mono, Kumbh_Sans} from 'next/font/google';

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['300', '500', '700'],
});

export const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
  display: 'swap',
  weight: ['300', '500', '700'],
});
