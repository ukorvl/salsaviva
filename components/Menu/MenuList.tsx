import {FocusEvent, ReactNode, useCallback, useContext} from 'react';
import {m} from 'framer-motion';
import {useHotkeys} from 'react-hotkeys-hook';
import clsx from 'clsx';
import useScroll from '@/lib/shared/useScroll';
import useWindowDimensions from '@/lib/shared/useWindowDimensions';
import {MenuContext} from './MenuContext';
import {MenuPosition} from './MenuPosition';
import menuButtonSize from './menuButtonSize';

/**
 * Props.
 */
type MenuListProps = {
  children: ReactNode;
};

const navVariants = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  open: ({height, position}: {height: number; position: MenuPosition}) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - ${position.right}px) ${position.top}px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  // eslint-disable-next-line jsdoc/require-jsdoc
  closed: ({position}: {height: number; position: MenuPosition}) => ({
    clipPath: `circle(0px at calc(100% - ${position.right + menuButtonSize}px) ${
      position.top + menuButtonSize
    }px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

const navCn = clsx(
  'absolute',
  'top-0',
  'left-0',
  'w-full',
  'h-full',
  'z-10',
  'bg-gradient-to-bl from-accent0 to-alternate',
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
);

/**
 * @param {MenuListProps} props Props.
 * @returns React component.
 */
export default function MenuList({children}: MenuListProps) {
  const {isOpen, setIsOpen, position} = useContext(MenuContext);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  useHotkeys('esc', close);
  useScroll(close);

  const {height} = useWindowDimensions();

  // eslint-disable-next-line jsdoc/require-jsdoc
  const onBlur = (e: FocusEvent<HTMLUListElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      close();
    }
  };

  return (
    <m.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={{height, position}}
      className={navCn}
      variants={navVariants}
      onBlur={onBlur}
    >
      {children}
    </m.nav>
  );
}
