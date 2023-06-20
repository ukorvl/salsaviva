import {ReactNode, useState} from 'react';
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

  return <MenuContext.Provider value={{isOpen, setIsOpen}}>{children}</MenuContext.Provider>;
}

Menu.Item = MenuItem;
Menu.Toggle = MenuToggle;
Menu.List = MenuList;
