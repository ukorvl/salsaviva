import {useOnScreen} from '@ukorvl/react-on-screen';
import clsx from 'clsx';
import {ReactNode, useLayoutEffect, useRef} from 'react';

/**
 * Props.
 */
type ViewportBlockProps = {
  setBgSrc: (src: string | null) => void;
  bgSrc: string | null;
  children: ReactNode;
};

const blockCn = clsx('h-screen', 'relative', 'z-10', 'flex', 'grow', 'flex-1');

/**
 * @param {ViewportBlockProps} props Props.
 * @returns React component.
 */
export default function ViewportBlock({setBgSrc, bgSrc, children}: ViewportBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {isOnScreen} = useOnScreen({ref, threshold: 0.25});

  useLayoutEffect(() => {
    if (isOnScreen) {
      setBgSrc(bgSrc);
    }
  }, [isOnScreen, setBgSrc, bgSrc]);

  return (
    <div
      className={blockCn}
      ref={ref}
    >
      {children}
    </div>
  );
}
