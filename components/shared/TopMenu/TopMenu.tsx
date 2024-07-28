'use client';

import clsx from 'clsx';
import {m} from 'framer-motion';
import {ReactNode} from 'react';
import useIsMobile from '@/lib/shared/useIsMobile';
import Menu from '../Menu/Menu';
import UniversalLink from '../UniversalLink/UniversalLink';

/**
 * TopMenu component props.
 */
type TopMenuProps = {
  menuItems: Array<{
    icon: ReactNode;
    bgImgPath: string;
  }>;
  socialLinks: Array<{
    link: ReactNode;
  }>;
};

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const socialLiksListCn = clsx('hidden', 'lg:flex', 'gap-8', 'mt-auto', 'mb-16');
const socialLinkMenuItem = clsx('text-xs');
const itemsListCn = clsx('lg:mt-24');
const homeMenuItem = clsx('mb-32', 'text-xl');

/**
 * @param {TopMenuProps} props Props.
 * @returns React component.
 */
export default function TopMenu({menuItems, socialLinks}: TopMenuProps) {
  const [isMobile] = useIsMobile();
  const top = isMobile ? 88 : 88;
  const right = isMobile ? 50 : 50;

  return (
    <Menu
      top={top}
      right={right}
    >
      <Menu.Toggle />
      <Menu.List>
        <m.ul
          variants={variants}
          className={itemsListCn}
        >
          <Menu.Item className={homeMenuItem}>
            <UniversalLink
              href="/"
              className="animated-link"
              rel="noopener noreferrer"
            >
              SALSAVIVA
            </UniversalLink>
          </Menu.Item>
          {menuItems.map(({icon, bgImgPath}, idx) => (
            <Menu.Item
              key={`menuItems-${idx}`}
              bgImgPath={bgImgPath}
            >
              {icon}
            </Menu.Item>
          ))}
        </m.ul>
        <m.ul
          variants={variants}
          className={socialLiksListCn}
        >
          {socialLinks.map(({link}, idx) => (
            <Menu.Item
              key={`socailLinks-${idx}`}
              className={socialLinkMenuItem}
            >
              {link}
            </Menu.Item>
          ))}
        </m.ul>
      </Menu.List>
    </Menu>
  );
}
