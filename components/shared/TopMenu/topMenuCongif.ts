import {env} from '@/app/env.mjs';

const {
  NEXT_PUBLIC_FACEBOOK_ADDRESS,
  NEXT_PUBLIC_INSTAGRAM_ADDRESS,
  NEXT_PUBLIC_TELEGRAM_ADDRESS,
  NEXT_PUBLIC_WHATSAPP_ADDRESS,
} = env;

/**
 * Top menu configuration.
 */
const menuItemsConfig = [
  {
    href: '/about',
    text: 'About',
    bgImgPath: 'top-menu.0.jpg',
  },
  {
    href: '/gallery',
    text: 'Gallery',
    bgImgPath: 'top-menu.1.jpg',
  },
  {
    href: '/teachers',
    text: 'Teachers',
    bgImgPath: 'top-menu.2.jpg',
  },
  {
    href: '/contact',
    text: 'Contact',
    bgImgPath: 'top-menu.3.jpg',
  },
] as const;

const socialLinksConfig = [
  {
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS ?? '',
    text: 'Instagram',
  },
  {
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS ?? '',
    text: 'Telegram',
  },
  {
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS ?? '',
    text: 'Facebook',
  },
  {
    href: NEXT_PUBLIC_WHATSAPP_ADDRESS ?? '',
    text: 'Whatsapp',
  },
] as const;

export {menuItemsConfig, socialLinksConfig};
