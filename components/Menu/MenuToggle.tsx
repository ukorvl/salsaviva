'use client';

import {Variants, motion} from 'framer-motion';
import {forwardRef, useContext} from 'react';
import {MenuContext} from './MenuContext';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * Props.
 */
type MenuToggleProps = {
  onToggle?: () => void;
  size?: number;
  className?: string;
};

const btnCn = clsx('absolute', 'top-16', 'right-16');

/**
 * @param {MenuToggleProps} props Props.
 * @returns React component.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(function MenuToggle(
  {onToggle, size = 72, className},
  ref,
) {
  const {setIsOpen, isOpen} = useContext(MenuContext);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onClick = () => {
    setIsOpen(!isOpen);
    onToggle && onToggle();
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(btnCn, className)}
      ref={ref}
    >
      vfvfvf
    </button>
  );
});

export default MenuToggle;
