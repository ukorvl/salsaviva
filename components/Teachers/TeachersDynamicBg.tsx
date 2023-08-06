import clsx from 'clsx';
import {AnimatePresence, m} from 'framer-motion';
import Image from 'next/image';

/**
 * Props.
 */
type TeachersBynamicBgProps = {
  bgSrc: string | null;
};

const bgCn = clsx(
  'fixed',
  'top-0',
  'left-0',
  'w-full',
  'h-full',
  'bg-cover',
  'bg-center',
  'bg-no-repeat',
);

/**
 * @param {TeachersBynamicBgProps} props Props.
 * @returns React component.
 */
export default function TeachersBynamicBg({bgSrc}: TeachersBynamicBgProps) {
  return (
    <AnimatePresence mode="popLayout">
      {bgSrc !== null && (
        <m.div
          className={bgCn}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          key={bgSrc}
          transition={{
            stiffness: 260,
            damping: 50,
            type: 'easeIn',
          }}
        >
          <Image
            src={`/images/${bgSrc}`}
            alt=""
            placeholder="blur"
            blurDataURL={`/images/blured/${bgSrc}`}
            fill
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}
