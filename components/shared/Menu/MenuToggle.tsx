import {forwardRef, memo} from 'react';
import clsx from 'clsx';
import {useContextSafeSafe} from '@/utils/useContextSafe';
import {MenuContext} from './MenuContext';
import menuButtonSize from './menuButtonSize';
import Button from '../Button/Button';
import MenuToggleSvgContent from './MenuToggleSvgContent';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

/**
 * Props.
 */
type MenuToggleProps = {
  onToggle?: () => void;
  className?: string;
};

const containerCn = clsx('fixed', 'z-40');
const btnCn = clsx('rounded-full');

/**
 * @param {MenuToggleProps} props Props.
 * @returns React component.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(function MenuToggle(
  {onToggle},
  ref,
) {
  const {setIsOpen, isOpen, position} = useContextSafeSafe(MenuContext);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onClick = () => {
    setIsOpen(!isOpen);
    onToggle && onToggle();
  };

  return (
    <AppearInViewport
      className={containerCn}
      style={position}
      animate={isOpen ? 'open' : 'closed'}
      transition={{delay: 0.6}}
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
    </AppearInViewport>
  );
});

export default memo(MenuToggle);
