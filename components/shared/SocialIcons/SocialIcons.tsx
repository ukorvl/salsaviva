'use client';

import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {ReactNode, memo} from 'react';
import {m} from 'framer-motion';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

/**
 * Direction.
 */
type Direction = 'row' | 'column';

/**
 * Props.
 */
type SocialIconsProps = {
  /** @default row */
  direction?: Direction;
  className?: string;
  icons: Array<{
    icon: ReactNode;
  }>;
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

const variants = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  visible: (direction: Direction) => ({
    [direction === 'row' ? 'x' : 'y']: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  }),
  // eslint-disable-next-line jsdoc/require-jsdoc
  hidden: (direction: Direction) => ({
    [direction === 'row' ? 'x' : 'y']: direction === 'row' ? -50 : 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  }),
};

/**
 * @param {SocialIconsProps} props Props.
 * @returns React component.
 */
function SocialIcons({direction = 'row', className, icons}: SocialIconsProps) {
  return (
    <AppearInViewport
      className={twMerge(iconsCn(direction), className)}
      transition={{delay: 0.6, staggerChildren: 0.2, delayChildren: 0.5}}
    >
      {icons.map(({icon}, idx) => (
        <m.div
          key={`socialIcons-${idx}`}
          variants={variants}
          custom={direction}
        >
          {icon}
        </m.div>
      ))}
    </AppearInViewport>
  );
}

export default memo(SocialIcons);
