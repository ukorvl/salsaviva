'use client';

import clsx from 'clsx';
import {HTMLMotionProps} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {LinkProps} from 'next/link';
import AppearInViewport from '../AppearInViewport/AppearInViewport';
import UniversalLink from '../UniversalLink/UniversalLink';

/**
 * Props.
 */
type CATLinkProps = {
  text: string;
  path: LinkProps['href'];
  className?: string;
  customVariants?: HTMLMotionProps<'div'>['variants'];
};

const defaultVariants = {
  visible: {opacity: 1, y: 0, scale: 1},
  hidden: {opacity: 0, y: '2rem', scale: 0.9},
};

const containerCn = clsx('text-2xl', 'w-full', 'text-center');
const linkCn = clsx('tracking-wider', 'animated-link');

/**
 * Call to action link.
 * @param {CATLinkProps} props Props.
 * @returns React component.
 */
export default function CATLink({text, className, customVariants, path}: CATLinkProps) {
  return (
    <AppearInViewport
      transition={{delay: 1.2}}
      className={twMerge(containerCn, className)}
      variants={{...defaultVariants, ...customVariants}}
    >
      <UniversalLink
        href={path}
        className={linkCn}
      >
        {text}
      </UniversalLink>
    </AppearInViewport>
  );
}
