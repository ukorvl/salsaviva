'use client';

import {motion} from 'framer-motion';

/**
 * Props.
 */
type MenuToggleProps = {
  onToggle?: () => void;
  size?: number;
};

/**
 *
 * @param props
 */
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

/**
 *
 * @param root0
 * @param root0.toggle
 * @returns React component.
 */
export const MenuToggle = ({onToggle, size}: MenuToggleProps) => (
  <button onClick={onToggle}>
    <svg
      width={size}
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
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: {opacity: 1},
          open: {opacity: 0},
        }}
        transition={{duration: 0.1}}
      />
      <Path
        variants={{
          closed: {d: 'M 2 16.346 L 20 16.346'},
          open: {d: 'M 3 2.5 L 17 16.346'},
        }}
      />
    </svg>
  </button>
);
