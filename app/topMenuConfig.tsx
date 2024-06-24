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
        target="_blank"
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
        target="_blank"
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
        target="_blank"
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
        target="_blank"
        rel="noopener noreferrer"
      >
        CONTACT
      </UniversalLink>
    ),
    bgImgPath: 'top-menu.3.jpg',
  },
];

const socialLinks = [
  {
    link: (
      <UniversalLink
        href={INSTAGRAM_ADDRESS}
        className={linkCn}
        target="_blank"
        rel="noopener noreferrer"
      >
        INSTAGRAM
      </UniversalLink>
    ),
  },
  {
    link: (
      <UniversalLink
        href={TELEGRAM_ADDRESS}
        className={linkCn}
        target="_blank"
        rel="noopener noreferrer"
      >
        TELEGRAM
      </UniversalLink>
    ),
  },
  {
    link: (
      <UniversalLink
        href={FACEBOOK_ADDRESS}
        className={linkCn}
        target="_blank"
        rel="noopener noreferrer"
      >
        FACEBOOK
      </UniversalLink>
    ),
  },
  {
    link: (
      <UniversalLink
        href={WHATSAPP_ADDRESS}
        className={linkCn}
        target="_blank"
        rel="noopener noreferrer"
      >
        WHATSAPP
      </UniversalLink>
    ),
  },
];

export {menuItems, socialLinks};
