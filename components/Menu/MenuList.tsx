import {FocusEvent, ReactNode, useCallback, useContext} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import useScroll from '@/utils/useScroll';
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
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  useHotkeys('esc', close);
  useScroll(close);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const onBlur = (e: FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      close();
    }
  };

  return <div onBlur={onBlur}>{children}</div>;
}
