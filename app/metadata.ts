/**
 * @file Default page metadata.
 */

const metadata = {
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
  ],
  colorScheme: 'dark',
  themeColor: '#602e87',
  authors: [{name: 'Ukorvl', url: 'https://github.com/ukorvl'}],
  manifest: '/manifest.json',
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
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
