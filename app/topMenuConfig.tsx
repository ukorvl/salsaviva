import clsx from 'clsx';
import {env} from '@/app/env.mjs';
import UniversalLink from '@/components/shared/UniversalLink/UniversalLink';

const {FACEBOOK_ADDRESS, INSTAGRAM_ADDRESS, TELEGRAM_ADDRESS, WHATSAPP_ADDRESS} = env;

const linkCn = clsx('animated-link');

/**
 * Top menu configuration.
 */
const menuItems = [
  {
    bgImgPath: 'top-menu.0.jpg',
    icon: (
      <UniversalLink
        href="/about"
        className={linkCn}
        rel="noopener noreferrer"
      >
        ABOUT
      </UniversalLink>
    ),
  },
  {
    icon: (
      <UniversalLink
        href="/gallery"
        className={linkCn}
        rel="noopener noreferrer"
      >
        GALLERY
      </UniversalLink>
    ),
    bgImgPath: 'top-menu.1.jpg',
  },
  {
    icon: (
      <UniversalLink
        href="/teachers"
        className={linkCn}
        rel="noopener noreferrer"
      >
        TEACHERS
      </UniversalLink>
    ),
    bgImgPath: 'top-menu.2.jpg',
  },
  {
    icon: (
      <UniversalLink
        href="/contact"
        className={linkCn}
        rel="noopener noreferrer"
      >
        CONTACT
      </UniversalLink>
    ),
    bgImgPath: 'top-menu.3.jpg',
  },
];

const socialLinks = [
  ['INSTAGRAM', INSTAGRAM_ADDRESS],
  ['TELEGRAM', TELEGRAM_ADDRESS],
  ['FACEBOOK', FACEBOOK_ADDRESS],
  ['WHATSAPP', WHATSAPP_ADDRESS],
].map(([text, href]) => ({
  link: (
    <UniversalLink
      href={href}
      className={linkCn}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </UniversalLink>
  ),
}));

export {menuItems, socialLinks};
