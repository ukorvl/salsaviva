import {MetadataRoute} from 'next';
import tailwindConfig from '../tailwind.config';

const colors = tailwindConfig.theme.extend.colors;
const {alternate = 'black'} = colors;

// eslint-disable-next-line jsdoc/require-jsdoc
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Salsaviva - Salsa, Bachata and Kizomba in Yerevan',
    short_name: 'Salsaviva',
    description: 'Social dance school in Yerevan',
    theme_color: alternate,
    background_color: alternate,
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/icons/logo_192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icons/logo_maskable_192.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: '/icons/logo_512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  };
}
