'use client';

import {Gallery as PSGallery, GalleryProps} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import clsx from 'clsx';
import config from './config';
import GalleryItem from './GalleryItem';

const galleryId = 'images';
const photoSwipeOptions: GalleryProps['options'] = {
  zoom: false,
  bgOpacity: 0.9,
  closeOnVerticalDrag: true,
  showHideAnimationType: 'fade',
  doubleTapAction: false,
  preloaderDelay: 1000,
  preload: [1, 4],
};

const containerCn = clsx(
  'grow',
  'w-full',
  'h-full',
  'grid',
  'grid-rows-auto',
  'sm: grid-cols-1',
  'md:grid-cols-2',
  'lg:grid-cols-3',
  '2xl:grid-cols-4',
  'select-none',
);

/**
 * @returns React component.
 */
export default function Gallery() {
  return (
    <div className={containerCn}>
      <PSGallery
        options={photoSwipeOptions}
        id={galleryId}
      >
        {config.map(props => (
          <GalleryItem
            key={props.src}
            {...props}
          />
        ))}
      </PSGallery>
    </div>
  );
}
