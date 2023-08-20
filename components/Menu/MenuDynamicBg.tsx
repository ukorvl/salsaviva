import {useContext} from 'react';
import clsx from 'clsx';
import {m, AnimatePresence} from 'framer-motion';
import {MenuContext} from './MenuContext';
import ImageWrapper from '../ImageWrapper/ImageWrapper';

// eslint-disable-next-line jsdoc/require-jsdoc
const dynamicBgCn = clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'z-30');

/**
 * @returns React component.
 */
export default function MenuDynamicBg() {
  const {menuBg} = useContext(MenuContext);

  return (
    <AnimatePresence mode="popLayout">
      {menuBg !== null && (
        <m.div
          className={dynamicBgCn}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          key={menuBg}
          transition={{
            stiffness: 260,
            damping: 30,
            type: 'easeIn',
          }}
        >
          <ImageWrapper
            src={`/images/${menuBg}`}
            blurDataURL={`/images/blured/${menuBg}`}
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}
