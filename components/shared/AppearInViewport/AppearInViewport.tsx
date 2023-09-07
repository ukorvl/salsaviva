'use client';

import {HTMLMotionProps, Variants, m} from 'framer-motion';
import {forwardRef} from 'react';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';

// eslint-disable-next-line jsdoc/require-jsdoc
type As = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// eslint-disable-next-line jsdoc/require-jsdoc
type SafeHTMLMotionProps<T extends As = As> = Omit<
  HTMLMotionProps<T>,
  'initial' | 'whileInView' | 'viewport' | 'ref'
>;

/**
 * Props.
 */
type AppearOnScreenProps<T extends As = As> = {
  as?: T;
} & SafeHTMLMotionProps<T>;

const defaultVariants: Variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

const defaultTransition = {duration: TransitionDuration.MEDIUM, delay: 0.3};

/**
 * @param {AppearOnScreenProps} props Props.
 * @returns React component.
 */
const AppearInViewport = forwardRef<HTMLDivElement, AppearOnScreenProps>(function AppearInViewport(
  {children, variants, transition, as = 'div', ...rest},
  ref,
) {
  const Component = m[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{...defaultTransition, ...transition}}
      variants={variants ?? defaultVariants}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default AppearInViewport;
