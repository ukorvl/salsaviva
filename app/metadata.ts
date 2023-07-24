/**
 * @file Default page metadata.
 */

import {Metadata} from 'next';
import {origin} from './origin';

const metadata: Metadata = {
  title: {
    default: 'Salsaviva',
    template: 'Salsaviva | %s',
  },
  description: 'Salsa, Bachata and Kizomba in Yerevan',
  keywords: [
    'Salsa',
    'Bachata',
    'Kizomba',
    'Yerevan',
    'Armenia',
    'dance',
    'latina',
    'dance studio',
    'dance school',
    'social dance',
  ],
  colorScheme: 'dark',
  themeColor: '#18132d',
  authors: [{name: 'Ukorvl', url: 'https://github.com/ukorvl'}],
  manifest: '/manifest.json',
  metadataBase: new URL(origin),
  openGraph: {
    title: 'Salsaviva',
    description: 'Salsa, Bachata and Kizomba in Yerevan',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salsaviva',
    description: 'Salsa, Bachata and Kizomba in Yerevan',
    images: ['https://nextjs.org/og.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: 'icon',
      sizes: 'any',
      url: '/icons/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/icons/icon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/apple-touch-icon.png',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
