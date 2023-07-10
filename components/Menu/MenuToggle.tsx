'use client';

import {SVGMotionProps, motion} from 'framer-motion';
import {forwardRef, memo, useContext} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {MenuContext} from './MenuContext';
import Button from '../Button/Button';

/**
 * Props.
 */
type MenuToggleProps = {
  onToggle?: () => void;
  className?: string;
};

const containerCn = clsx('absolute', 'top-16', 'right-16', 'z-20');
const btnCn = clsx('rounded-full w-24 h-24');

// eslint-disable-next-line jsdoc/require-jsdoc
const Path = ({variants}: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="white"
    strokeWidth="4"
    stroke="white"
    strokeLinecap="round"
    variants={variants}
  />
);

/**
 * @param {MenuToggleProps} props Props.
 * @returns React component.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(function MenuToggle(
  {onToggle, className},
  ref,
) {
  const {setIsOpen, isOpen} = useContext(MenuContext);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onClick = () => {
    setIsOpen(!isOpen);
    onToggle && onToggle();
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.5, delay: 0.3}}
      className={containerCn}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Button
        onClick={onClick}
        className={twMerge(btnCn, className)}
        ref={ref}
        variant="alternate"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <Path
            variants={{
              closed: {d: 'M 2 2.5 L 20 2.5'},
              open: {d: 'M 3 16.5 L 17 2.5'},
            }}
          />
          <Path
            variants={{
              closed: {d: 'M 2 16.346 L 20 16.346'},
              open: {d: 'M 3 2.5 L 17 16.346'},
            }}
          />
        </svg>
      </Button>
    </motion.div>
  );
});

export default memo(MenuToggle);