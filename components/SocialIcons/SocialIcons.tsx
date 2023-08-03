'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';
import {memo} from 'react';
import {m} from 'framer-motion';
import iconsConfig from './iconsConfig';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

const iconsCn = clsx(
  'flex',
  'flex-col',
  'justify-center',
  'gap-4',
  'select-none',
  'fixed',
  'left-4',
  '-translate-y-2/4',
  'top-2/4',
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
 * @returns React component.
 */
function SocialIcons() {
  return (
    <AppearInViewport
      className={iconsCn}
      transition={{delay: 0.6, staggerChildren: 0.2, delayChildren: 0.5}}
    >
      {iconsConfig.map(({href, target, className, ...rest}) => (
        <m.div
          key={href}
          variants={variants}
        >
          <Link
            href={href}
            target={target}
          >
            <FontAwesomeIcon
              className={twMerge(iconCn, className)}
              {...rest}
            />
          </Link>
        </m.div>
      ))}
    </AppearInViewport>
  );
}

export default memo(SocialIcons);
