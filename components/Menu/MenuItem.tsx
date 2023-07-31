import {m} from 'framer-motion';
import {ReactNode, forwardRef, useContext} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuItemProps = {
  children: ReactNode;
  className?: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

const itemCn = clsx('text-5xl', 'm-2', 'text-center');

/**
 * @param {MenuItemProps} props Props.
 * @returns React componenet.
 */
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(
  {children, className},
  ref,
) {
  const {setIsOpen} = useContext(MenuContext);

  return (
    <m.li
      variants={variants}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      ref={ref}
      onClick={() => setIsOpen(false)}
      className={twMerge(itemCn, className)}
    >
      {children}
    </m.li>
  );
});

export default MenuItem;
