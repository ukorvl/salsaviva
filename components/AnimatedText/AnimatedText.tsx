'use client';
import {m} from 'framer-motion';
import {memo} from 'react';
import clsx from 'clsx';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

/**
 * Props.
 */
type AnimatedTextProps = {
  text: string;
  className?: string;
};

const containerVariants = {
  hidden: {opacity: 0},
  // eslint-disable-next-line jsdoc/require-jsdoc
  visible: (i = 1) => ({
    opacity: 1,
    transition: {staggerChildren: 0.1, delayChildren: 0.02 * i},
  }),
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
};

const spanCn = clsx('inline-block', 'mr-[0.25em]');

/**
 * @param {AnimatedTextProps} props Props.
 * @returns React component.
 */
function AnimatedText({text, className}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <AppearInViewport
      variants={containerVariants}
      className={className}
    >
      {words.map((word, index) => (
        <m.span
          variants={childVariants}
          className={spanCn}
          key={index}
        >
          {word}
        </m.span>
      ))}
    </AppearInViewport>
  );
}

export default memo(AnimatedText);
