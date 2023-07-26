'use client';

import {SVGMotionProps, Variants, m} from 'framer-motion';
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

const menuVariants: Variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

const containerCn = clsx('absolute', 'z-20');
const btnCn = clsx('rounded-full w-24 h-24');

// eslint-disable-next-line jsdoc/require-jsdoc
const Path = ({variants}: SVGMotionProps<SVGPathElement>) => (
  <m.path
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
  const {setIsOpen, isOpen, position} = useContext(MenuContext);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onClick = () => {
    setIsOpen(!isOpen);
    onToggle && onToggle();
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.75, delay: 1}}
      variants={menuVariants}
      className={containerCn}
      style={position}
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
    </m.div>
  );
});

export default memo(MenuToggle);
