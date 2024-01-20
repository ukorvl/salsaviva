import clsx from 'clsx';
import {ReactNode} from 'react';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import ImageWrapper from '@/components/shared/ImageWrapper/ImageWrapper';

/**
 * BlockWithImage props.
 */
type BlockWithImageProps = {
  text: ReactNode;
  imageFilename: string;
  imageAlt?: string;
  reverse?: boolean;
};

const containerCn = clsx(
  'flex',
  'items-center',
  'justify-center',
  'w-full',
  'p-32',
  'text-center',
  'text-4xl',
  'leading-normal',
);
// eslint-disable-next-line jsdoc/require-jsdoc
const imgContainerCn = (reversed?: boolean) =>
  clsx('relative', 'h-72', 'w-72', 'basis-1/2', reversed && 'order-last');
// eslint-disable-next-line jsdoc/require-jsdoc
const imgCn = clsx('object-cover');

/**
 * @param {BlockWithImageProps} props Props.
 * @returns React component.
 */
export default function BlockWithImage({
  imageFilename,
  imageAlt = '',
  reverse,
  text,
}: BlockWithImageProps) {
  return (
    <AppearInViewport className={containerCn}>
      <div className={imgContainerCn(reverse)}>
        <ImageWrapper
          className={imgCn}
          src={`/images/${imageFilename}`}
          blurDataURL={`images/blured/${imageFilename}`}
          alt={imageAlt}
          fill
        />
      </div>
      <div>{text}</div>
    </AppearInViewport>
  );
}
