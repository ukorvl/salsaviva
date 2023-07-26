import {createContext} from 'react';
import {MenuPosition} from './MenuPosition';

/**
 * Context type.
 */
type MenuConextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  position: MenuPosition;
};

/**
 * Menu context.
 */
export const MenuContext = createContext({} as MenuConextType);
