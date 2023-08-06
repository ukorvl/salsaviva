import {MouseEvent} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import {forwardRef} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {customCursorClickableClass} from '@/lib/customCursor/customCursorClickableClass';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

/**
 * Props.
 */
type GalleryItemProps = {
  src: string;
  blurDataURL: string;
  open: (e: MouseEvent) => void;
};

const imgCn = clsx('rounded-md', 'overflow-hidden');
const overflowCn = clsx(
  customCursorClickableClass,
  'relative',
  'after:absolute',
  'after:content-[""]',
  'after:w-full',
  'after:h-full',
  'after:top-0',
  'after:left-0',
  'after:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white to-transparent',
  'after:transition-opacity',
  'after:duration-300',
  'after:ease-out',
  'after:opacity-0',
  'hover:after:opacity-20',
  'transition-transform',
  'duration-500',
  'ease-out',
  'hover:translate-y-1',
  'rounded-md',
  'focus-ring',
);

/**
 * @returns React component.
 */
const GalleryItem = forwardRef<HTMLImageElement, GalleryItemProps>(function GalleryItem(
  {open, src, blurDataURL},
  ref,
) {
  const hotkeysRef = useHotkeys<HTMLDivElement>(['enter', 'space'], open as any, {
    preventDefault: true,
  });

  return (
    <AppearInViewport>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={overflowCn}
        style={{height: 300, width: 400}}
        onClick={open}
        tabIndex={0}
        role="link"
        ref={hotkeysRef}
      >
        <Image
          className={imgCn}
          ref={ref}
          src={src}
          placeholder="blur"
          blurDataURL={blurDataURL}
          alt=""
          fill
        />
      </div>
    </AppearInViewport>
  );
});

export default GalleryItem;
