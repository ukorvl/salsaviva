'use client';

import clsx from 'clsx';
import {Gallery as PSGallery, Item} from 'react-photoswipe-gallery';
import Image from 'next/image';
import useNetworkSpeed from '@/lib/shared/useNetworkSpeed';
import config from '../../#constants/config';

const containerCn = clsx('flex', 'flex-wrap', 'gap-4', 'justify-center');

const photoSwipeOptions = {};

/**
 * @returns React component.
 */
export default function Gallery() {
  const [, isFast] = useNetworkSpeed();

  return (
    <PSGallery options={photoSwipeOptions}>
      <div className={containerCn}>
        {config.map(({src, blurDataURL, lowQualitySrc, dimensions}, index) => (
          <Item
            key={index}
            original={''}
            thumbnail={''}
            width={dimensions.width}
            height={dimensions.height}
          >
            {({ref, open}) => (
              <Image
                ref={ref as any}
                src={isFast ? src : lowQualitySrc}
                placeholder="blur"
                blurDataURL={blurDataURL}
                alt=""
                onClick={open}
                fill
              />
            )}
          </Item>
        ))}
      </div>
    </PSGallery>
  );
}
