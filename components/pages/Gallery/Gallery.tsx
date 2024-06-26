'use client';

import {Gallery as PSGallery, GalleryProps} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
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

/**
 * @returns React component.
 */
export default function Gallery() {
  return (
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
  );
}
