'use client';

import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {memo} from 'react';
import {m} from 'framer-motion';
import iconsConfig from './iconsConfig';
import AppearInViewport from '../AppearInViewport/AppearInViewport';
import UniversalLink from '../UniversalLink/UniversalLink';

/**
 * Props.
 */
type SocialIconsProps = {
  iconSize: FontAwesomeIconProps['size'];
  /** @default row */
  direction?: 'row' | 'column';
  className?: string;
};

// eslint-disable-next-line jsdoc/require-jsdoc
const iconsCn = (direction: SocialIconsProps['direction']) =>
  clsx(
    'flex',
    direction === 'column' && 'flex-col',
    'justify-center',
    'gap-4',
    'select-none',
    'z-10',
  );
const iconCn = clsx('hover:scale-105 hover:-translate-y-0.5 transition-transform');

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

/**
 * @param {SocialIconsProps} props Props.
 * @returns React component.
 */
function SocialIcons({iconSize, direction = 'row', className}: SocialIconsProps) {
  return (
    <AppearInViewport
      className={twMerge(iconsCn(direction), className)}
      transition={{delay: 0.6, staggerChildren: 0.2, delayChildren: 0.5}}
    >
      {iconsConfig.map(({href, target, className, ...rest}) => (
        <m.div
          key={href}
          variants={variants}
        >
          <UniversalLink
            href={href}
            target={target}
          >
            <FontAwesomeIcon
              className={twMerge(iconCn, className)}
              size={iconSize}
              {...rest}
            />
          </UniversalLink>
        </m.div>
      ))}
    </AppearInViewport>
  );
}

export default memo(SocialIcons);
