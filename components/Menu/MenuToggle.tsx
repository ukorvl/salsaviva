'use client';

import {Variants, m} from 'framer-motion';
import {forwardRef, memo, useContext} from 'react';
import clsx from 'clsx';
import {MenuContext} from './MenuContext';
import menuButtonSize from './menuButtonSize';
import Button from '../Button/Button';
import MenuToggleSvgContent from './MenuToggleSvgContent';

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
const btnCn = clsx('rounded-full');

/**
 * @param {MenuToggleProps} props Props.
 * @returns React component.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(function MenuToggle(
  {onToggle},
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
        className={btnCn}
        ref={ref}
        variant="alternate"
        style={{width: menuButtonSize, height: menuButtonSize}}
      >
        <MenuToggleSvgContent />
      </Button>
    </m.div>
  );
});

export default memo(MenuToggle);
