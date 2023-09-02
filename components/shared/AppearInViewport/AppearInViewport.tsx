'use client';

import {HTMLMotionProps, Variants, m} from 'framer-motion';
import {ReactNode, forwardRef} from 'react';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';

// eslint-disable-next-line jsdoc/require-jsdoc
type SafeHTMLMotionProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'viewport' | 'ref'
>;

/**
 * Props.
 */
type AppearOnScreenProps = {
  children: ReactNode;
} & SafeHTMLMotionProps;

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
  {children, variants, transition, ...rest},
  ref,
) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{...defaultTransition, ...transition}}
      variants={variants ?? defaultVariants}
      ref={ref}
      {...rest}
    >
      {children}
    </m.div>
  );
});

export default AppearInViewport;
