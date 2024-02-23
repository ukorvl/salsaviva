'use client';

import {ReactNode, useState} from 'react';
import FocusTrap from 'focus-trap-react';
import useDisableBodyScroll from '@/lib/shared/useDisableBodyScroll';
import MenuItem from './MenuItem';
import MenuToggle from './MenuToggle';
import MenuList from './MenuList';
import {MenuContext} from './MenuContext';
import {MenuPosition} from './MenuPosition';
import {usePreserveActiveElement} from './usePreserveActiveElement';

/**
 * Props.
 */
type MenuProps = {
  /** @default false */
  initialOpen?: boolean;
  children?: ReactNode;
} & MenuPosition;

/**
 * @param {MenuProps} props Props.
 * @returns React component.
 */
export default function Menu({initialOpen = false, children, ...position}: MenuProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [menuBg, setMenuBg] = useState<string | null>(null);
  useDisableBodyScroll(isOpen);
  usePreserveActiveElement(isOpen);

  return (
    <MenuContext.Provider value={{isOpen, setIsOpen, position, menuBg, setMenuBg}}>
      <FocusTrap
        active={isOpen}
        paused={!isOpen}
        focusTrapOptions={{
          fallbackFocus: 'nav',
        }}
      >
        <div>{children}</div>
      </FocusTrap>
    </MenuContext.Provider>
  );
}

Menu.Item = MenuItem;
Menu.Toggle = MenuToggle;
Menu.List = MenuList;
