import {FocusEvent, ReactNode, useCallback, useContext, useRef} from 'react';
import {motion} from 'framer-motion';
import {useHotkeys} from 'react-hotkeys-hook';
import clsx from 'clsx';
import useScroll from '@/lib/shared/useScroll';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuListProps = {
  children: ReactNode;
};

const navVariants = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const navCn =
  clsx();
  // 'absolute',
  // 'top-0',
  // 'left-0',
  // 'w-full',
  // 'h-full',
  // 'z-10',
  // 'bg-alternate',

/**
 * @param {MenuListProps} props Props.
 * @returns React component.
 */
export default function MenuList({children}: MenuListProps) {
  const {isOpen, setIsOpen} = useContext(MenuContext);
  const containerRef = useRef(null);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  useHotkeys('esc', close);
  useScroll(close);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const onBlur = (e: FocusEvent<HTMLUListElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      close();
    }
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      //custom={height}
      ref={containerRef}
      className={navCn}
    >
      <motion.ul
        onBlur={onBlur}
        ref={containerRef}
        variants={variants}
      >
        {children}
      </motion.ul>
    </motion.nav>
  );
}
