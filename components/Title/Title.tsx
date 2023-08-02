import {memo} from 'react';
import clsx from 'clsx';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

const titleCn = clsx('font-light', 'text-9xl', 'text-transparent', 'bg-clip-text');
const subtitleCn = clsx('text-2xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx(
  'z-10',
  'relative',
  'font-sans',
  'select-none',
  'bg-gradient-to-r',
  'from-accent3',
  'to-accent0',
  'bg-clip-text',
);

/**
 * @returns React component.
 */
function Title() {
  return (
    <AppearInViewport className={titleContainerCn}>
      <h1 className={titleCn}>
        SALSA<span className="font-extrabold">VIVA</span>
      </h1>
      <h6 className={subtitleCn}>SOCIAL DANCE SCHOOL</h6>
    </AppearInViewport>
  );
}

export default memo(Title);
