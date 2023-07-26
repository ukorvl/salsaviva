import {LinkProps} from 'next/link';

// eslint-disable-next-line jsdoc/require-jsdoc
type ConfigItem = LinkProps & {
  text: string;
};

const {
  NEXT_PUBLIC_FACEBOOK_ADDRESS,
  NEXT_PUBLIC_INSTAGRAM_ADDRESS,
  NEXT_PUBLIC_TELEGRAM_ADDRESS,
  NEXT_PUBLIC_WHATSAPP_ADDRESS,
} = process.env;

/**
 * Top menu configuration.
 */
const menuItemsConfig: ConfigItem[] = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
  {
    href: '/teachers',
    text: 'Teachers',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
];

const socialLinksConfig: ConfigItem[] = [
  {
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS ?? '',
    text: 'Facebook',
  },
  {
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS ?? '',
    text: 'Instagram',
  },
  {
    href: NEXT_PUBLIC_WHATSAPP_ADDRESS ?? '',
    text: 'Whatsapp',
  },
  {
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS ?? '',
    text: 'Telegram',
  },
];

export {menuItemsConfig, socialLinksConfig};
