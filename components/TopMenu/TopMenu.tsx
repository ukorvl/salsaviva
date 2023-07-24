import Link from 'next/link';
import clsx from 'clsx';
import {m} from 'framer-motion';
import {menuItemsConfig, socialLinksConfig} from './topMenuCongif';
import Menu from '../Menu/Menu';

const itemsVariants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const socialLinksVariants = itemsVariants;

const linkCn = clsx('animated-link');

const socialLiksListCn = clsx('flex', 'gap-8', 'mt-auto', 'mb-16');

const socialLinkMenuItem = clsx('text-xs');

const itemsListCn = clsx('mt-48');

/**
 * @returns React component.
 */
export default function TopMenu() {
  return (
    <Menu>
      <Menu.Toggle />
      <Menu.List>
        <m.ul
          variants={itemsVariants}
          className={itemsListCn}
        >
          {menuItemsConfig.map(({href, text}, idx) => (
            <Menu.Item key={idx}>
              <Link
                href={href}
                className={linkCn}
              >
                {text}
              </Link>
            </Menu.Item>
          ))}
        </m.ul>
        <m.ul
          variants={socialLinksVariants}
          className={socialLiksListCn}
        >
          {socialLinksConfig.map(({href, text}, idx) => (
            <Menu.Item
              key={idx}
              className={socialLinkMenuItem}
            >
              <Link
                href={href}
                className={linkCn}
                target="_blank"
              >
                {text.toUpperCase()}
              </Link>
            </Menu.Item>
          ))}
        </m.ul>
      </Menu.List>
    </Menu>
  );
}
