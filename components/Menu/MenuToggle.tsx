'use client';

import {Variants, motion} from 'framer-motion';
import {forwardRef} from 'react';

/**
 * Props.
 */
type MenuToggleProps = {
  onToggle?: () => void;
  size?: number;
  className?: string;
};

/**
 * @param {MenuToggleProps} props Props.
 * @returns React component.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(function MenuToggle(
  {onToggle, size = 72, className},
  ref,
) {
  return (
    <button
      onClick={onToggle}
      ref={ref}
    >
      <svg
        width={size}
        height="23"
        viewBox="0 0 23 23"
      ></svg>
    </button>
  );
});

export default MenuToggle;
