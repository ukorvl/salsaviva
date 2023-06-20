import {motion} from 'framer-motion';
import {forwardRef, useContext} from 'react';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuItemProps = {
  className?: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

/**
 * @param {MenuItemProps} props Props.
 * @returns React componenet.
 */
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem({className}, ref) {
  const {setIsOpen} = useContext(MenuContext);

  return (
    <motion.li
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
      ref={ref}
    >
      <div className="icon-placeholder" />
      <div className="text-placeholder" />
    </motion.li>
  );
});

export default MenuItem;
