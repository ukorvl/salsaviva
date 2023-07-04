import {FocusEvent, ReactNode, useCallback, useContext, useRef} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import useScroll from '@/lib/shared/useScroll';
import useDimensions from '@/lib/shared/useDimensions';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuListProps = {
  children: ReactNode;
};

/**
 * @param {MenuListProps} props Props.
 * @returns React component.
 */
export default function MenuList({children}: MenuListProps) {
  const {setIsOpen} = useContext(MenuContext);
  const containerRef = useRef(null);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  useHotkeys('esc', close);
  useScroll(close);
  const {height} = useDimensions();

  // eslint-disable-next-line jsdoc/require-jsdoc
  const onBlur = (e: FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      close();
    }
  };

  return (
    <div
      onBlur={onBlur}
      ref={containerRef}
    >
      {children}
    </div>
  );
}
