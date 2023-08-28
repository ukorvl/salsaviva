import {m} from 'framer-motion';
import {ReactNode, forwardRef, useContext, useLayoutEffect} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {useHover} from '@/lib/shared/useHover';
import {useAssignRefs} from '@/lib/shared/useAssignRefs';
import {MenuContext} from './MenuContext';

/**
 * Props.
 */
type MenuItemProps = {
  children: ReactNode;
  className?: string;
  bgImgPath?: string;
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

const itemCn = clsx('text-5xl', 'm-4', 'text-center', 'z-40', 'relative');

/**
 * @param {MenuItemProps} props Props.
 * @returns React componenet.
 */
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(
  {children, className, bgImgPath},
  forwardedRef,
) {
  const {setIsOpen, setMenuBg} = useContext(MenuContext);
  const [r, isHover] = useHover();
  const ref = useAssignRefs(r, forwardedRef);

  useLayoutEffect(() => {
    if (bgImgPath) {
      setMenuBg(isHover ? bgImgPath : null);
    }
  }, [isHover, bgImgPath, setMenuBg]);

  return (
    <m.li
      variants={variants}
      whileTap={{scale: 0.9}}
      ref={ref}
      onClick={() => setIsOpen(false)}
      className={twMerge(itemCn, className)}
    >
      {children}
    </m.li>
  );
});

export default MenuItem;
