'use client';

import clsx from 'clsx';
import {m} from 'framer-motion';
import {menuItemsConfig, socialLinksConfig} from './topMenuCongif';
import Menu from '../Menu/Menu';
import UniservsalLink from '../UniservsalLink/UniservsalLink';

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const linkCn = clsx('animated-link');
const socialLiksListCn = clsx('flex', 'gap-8', 'mt-auto', 'mb-16');
const socialLinkMenuItem = clsx('text-xs');
const itemsListCn = clsx('mt-24');
const homeMenuItem = clsx('mb-32', 'text-xl');

/**
 * @returns React component.
 */
export default function TopMenu() {
  return (
    <Menu
      top={88}
      right={50}
    >
      <Menu.Toggle />
      <Menu.List>
        <m.ul
          variants={variants}
          className={itemsListCn}
        >
          <Menu.Item className={homeMenuItem}>
            <UniservsalLink
              href="/"
              className={linkCn}
            >
              SALSAVIVA
            </UniservsalLink>
          </Menu.Item>
          {menuItemsConfig.map(({href, text, bgImgPath}, idx) => (
            <Menu.Item
              key={idx}
              bgImgPath={bgImgPath}
            >
              <UniservsalLink
                href={href}
                className={linkCn}
              >
                {text}
              </UniservsalLink>
            </Menu.Item>
          ))}
        </m.ul>
        <m.ul
          variants={variants}
          className={socialLiksListCn}
        >
          {socialLinksConfig.map(({href, text}, idx) => (
            <Menu.Item
              key={idx}
              className={socialLinkMenuItem}
            >
              <UniservsalLink
                href={href}
                className={linkCn}
                target="_blank"
              >
                {text.toUpperCase()}
              </UniservsalLink>
            </Menu.Item>
          ))}
        </m.ul>
      </Menu.List>
    </Menu>
  );
}
