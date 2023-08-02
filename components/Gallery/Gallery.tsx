'use client';

import {MutableRefObject} from 'react';
import clsx from 'clsx';
import {Gallery as PSGallery, Item, GalleryProps} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import useNetworkSpeed from '@/lib/shared/useNetworkSpeed';
import config from './config';
import GalleryItem from './GalleryItem';

const containerCn = clsx('flex', 'flex-wrap', 'gap-4', 'justify-center');

const photoSwipeOptions: GalleryProps['options'] = {
  zoom: false,
  bgOpacity: 0.9,
};

/**
 * @returns React component.
 */
export default function Gallery() {
  const [, isFast] = useNetworkSpeed();

  return (
    <div className={containerCn}>
      <PSGallery options={photoSwipeOptions}>
        {config.map(({src, lowQualitySrc, dimensions: {width, height}, blurDataURL}) => {
          const computedSrc = isFast ? src : lowQualitySrc;
          return (
            <Item
              original={computedSrc}
              thumbnail={computedSrc}
              alt=""
              width={width}
              height={height}
              key={computedSrc}
            >
              {({open, ref}) => (
                <GalleryItem
                  open={open}
                  ref={ref as MutableRefObject<HTMLImageElement>}
                  blurDataURL={blurDataURL}
                  src={computedSrc}
                />
              )}
            </Item>
          );
        })}
      </PSGallery>
    </div>
  );
}
