import {useContext} from 'react';
import clsx from 'clsx';
import {m, AnimatePresence} from 'framer-motion';
import Image from 'next/image';
import {MenuContext} from './MenuContext';

// eslint-disable-next-line jsdoc/require-jsdoc
const dynamicBgCn = clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'z-20');

/**
 * @returns React component.
 */
export default function MenuDynamicBg() {
  const {menuBg} = useContext(MenuContext);

  return (
    <AnimatePresence mode="wait">
      {menuBg !== null && (
        <m.div
          className={dynamicBgCn}
          initial={{x: 300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -300, opacity: 0}}
          key={menuBg}
          transition={{
            stiffness: 260,
            damping: 30,
            type: 'easeIn',
          }}
        >
          <Image
            src={`/images/${menuBg}`}
            alt=""
            placeholder="blur"
            blurDataURL={`/images/blured/${menuBg}`}
            fill
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}