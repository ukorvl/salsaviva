import {MutableRefObject} from 'react';
import {Item} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import GalleryImage from './GalleryImage';
import {GalleryConfigItem} from './config';

/**
 * Props.
 */
type GalleryItemProps = GalleryConfigItem;

/**
 * @param {GalleryItemProps} props Props.
 * @returns React component.
 */
export default function GalleryItem({src, blurDataURL, width, height, alt}: GalleryItemProps) {
  return (
    <Item
      original={src}
      thumbnail={src}
      alt={alt}
      width={width}
      height={height}
      key={src}
    >
      {({open, ref}) => (
        <GalleryImage
          open={open}
          ref={ref as MutableRefObject<HTMLImageElement>}
          blurDataURL={blurDataURL}
          src={src}
        />
      )}
    </Item>
  );
}
