import {MouseEvent} from 'react';
import clsx from 'clsx';
import {forwardRef} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {customCursorClickableClass} from '@/lib/customCursor/customCursorClickableClass';
import useDisableRightClick from '@/lib/shared/useDisableRightClick';
import {useAssignRefs} from '@/lib/shared/useAssignRefs';
import AppearInViewport from '../../shared/AppearInViewport/AppearInViewport';
import ImageWrapper from '../../shared/ImageWrapper/ImageWrapper';

/**
 * Props.
 */
type GalleryItemProps = {
  src: string;
  blurDataURL: string;
  open: (e: MouseEvent) => void;
};

const imgCn = clsx('object-cover');
const overflowCn = clsx(
  customCursorClickableClass,
  'relative',
  'aspect-square',
  'focus:outline-none',
);

/**
 * @returns React component.
 */
const GalleryImage = forwardRef<HTMLImageElement, GalleryItemProps>(function GalleryItem(
  {open, src, blurDataURL},
  ref,
) {
  const hotkeysRef = useHotkeys<HTMLDivElement>(['enter', 'space'], open as any, {
    preventDefault: true,
  });
  const disableRef = useDisableRightClick();
  const finalRef = useAssignRefs(hotkeysRef, disableRef);

  return (
    <AppearInViewport>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={overflowCn}
        onClick={open}
        tabIndex={0}
        role="link"
        ref={finalRef}
      >
        <ImageWrapper
          className={imgCn}
          ref={ref}
          src={src}
          blurDataURL={blurDataURL}
          fill
        />
      </div>
    </AppearInViewport>
  );
});

export default GalleryImage;
