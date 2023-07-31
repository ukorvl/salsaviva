const {
  NEXT_PUBLIC_FACEBOOK_ADDRESS,
  NEXT_PUBLIC_INSTAGRAM_ADDRESS,
  NEXT_PUBLIC_TELEGRAM_ADDRESS,
  NEXT_PUBLIC_WHATSAPP_ADDRESS,
} = process.env;

/**
 * Top menu configuration.
 */
const menuItemsConfig = [
  {
    href: '/about',
    text: 'About',
    bgImgPath: '/images/top-menu/0.jpg',
  },
  {
    href: '/gallery',
    text: 'Gallery',
    bgImgPath: '/images/top-menu/1.jpg',
  },
  {
    href: '/teachers',
    text: 'Teachers',
    bgImgPath: '/images/top-menu/2.jpg',
  },
  {
    href: '/contact',
    text: 'Contact',
    bgImgPath: '/images/top-menu/3.jpg',
  },
] as const;

const socialLinksConfig = [
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
] as const;

export {menuItemsConfig, socialLinksConfig};
