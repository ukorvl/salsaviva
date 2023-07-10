import {ReactNode, useState} from 'react';
import useDisableBodyScroll from '@/lib/shared/useDisableBodyScroll';
import MenuItem from './MenuItem';
import MenuToggle from './MenuToggle';
import MenuList from './MenuList';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuProps = {
  /** @default false */
  initialOpen?: boolean;
  children?: ReactNode;
};

/**
 * @param {MenuProps} props Props.
 * @returns React component.
 */
export default function Menu({initialOpen = false, children}: MenuProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  useDisableBodyScroll(isOpen);

  return <MenuContext.Provider value={{isOpen, setIsOpen}}>{children}</MenuContext.Provider>;
}

Menu.Item = MenuItem;
Menu.Toggle = MenuToggle;
Menu.List = MenuList;
