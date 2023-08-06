import {FocusEvent, ReactNode, useCallback, useContext, useEffect} from 'react';
import {m} from 'framer-motion';
import {useHotkeys} from 'react-hotkeys-hook';
import clsx from 'clsx';
import useWindowDimensions from '@/lib/shared/useWindowDimensions';
import {MenuContext} from './MenuContext';
import {MenuPosition} from './MenuPosition';
import menuButtonSize from './menuButtonSize';
import MenuDynamicBg from './MenuDynamicBg';

/**
 * Props.
 */
type MenuListProps = {
  children: ReactNode;
};

const navVariants = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  open: ({height, position}: {height: number; position: MenuPosition}) => ({
    clipPath: getClipPath({height, position}),
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  // eslint-disable-next-line jsdoc/require-jsdoc
  closed: ({position}: {position: MenuPosition}) => ({
    clipPath: getClipPath({position}),
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
  'z-20',
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

  useEffect(() => {
    addEventListener('scroll', close);

    return () => {
      removeEventListener('scroll', close);
    };
  }, [close]);

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
      <MenuDynamicBg />
    </m.nav>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getClipPath({height, position}: {height?: number; position: MenuPosition}) {
  let coordinates = '';

  (['left', 'right', 'top', 'bottom'] satisfies (keyof MenuPosition)[]).forEach((x, i) => {
    const val = position[x];

    if (val === undefined) {
      return;
    }

    if (i > 0) {
      coordinates += ' ';
    }

    if (x === 'left' || x === 'top') {
      coordinates += `${val + menuButtonSize / 2}px `;
      return;
    }

    coordinates += `calc(100% - ${val + menuButtonSize / 2}px)`;
  });

  const size = height ? `${height * 2 + 200}px` : '0px';

  return `circle(${size} at ${coordinates}`;
}
