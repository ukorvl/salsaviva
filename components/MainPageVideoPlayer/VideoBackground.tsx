import clsx from 'clsx';
import {m} from 'framer-motion';
import useVideoBeforeEnd from './useVideoBeforeEnd';

/**
 * Props.
 */
type VideoBackgroundProps = {
  src: string;
  type: string;
  onBeforeEnded: () => void;
};

const videoCn = clsx('w-full', 'h-full', 'object-cover', 'filter', 'brightness-60');

/**
 * @param {VideoBackgroundProps} props Props.
 * @returns React component.
 */
export default function VideoBackground({src, type, onBeforeEnded}: VideoBackgroundProps) {
  const [ref] = useVideoBeforeEnd(onBeforeEnded, 1.5);

  return (
    <m.video
      muted
      autoPlay
      className={videoCn}
      initial={{opacity: 0, scale: 1.5}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 1.3}}
      transition={{duration: 0.75, type: 'easeOut'}}
      ref={ref}
    >
      <source
        src={src}
        type={type}
      />
      <track kind="captions" />
    </m.video>
  );
}
