'use client';

import {motion, AnimatePresence} from 'framer-motion';

/**
 * @param {{children}} props Props.
 * @returns Global template.
 */
export default function Template({children}: {children: React.ReactNode}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{x: 300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 300, opacity: 0}}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
