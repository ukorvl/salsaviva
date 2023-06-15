import {createContext} from 'react';

/**
 * Context type.
 */
type MenuConextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

/**
 * Menu context.
 */
export const MenuContext = createContext({} as MenuConextType);
