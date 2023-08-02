import {useContext} from 'react';
import clsx from 'clsx';
import {m, AnimatePresence} from 'framer-motion';
import Image from 'next/image';
import useNetworkSpeed from '@/lib/shared/useNetworkSpeed';
import {MenuContext} from './MenuContext';

// eslint-disable-next-line jsdoc/require-jsdoc
const dynamicBgCn = clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'z-20');

/**
 * @returns React component.
 */
export default function MenuDynamicBg() {
  const {menuBg} = useContext(MenuContext);
  const [, isFast] = useNetworkSpeed();
  const src = isFast ? `/images/${menuBg}` : `/images/low-quality/${menuBg}`;

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
          <Image
            src={src}
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
