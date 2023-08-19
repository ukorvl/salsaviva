import {MutableRefObject} from 'react';
import {Item} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import GalleryImage from './GalleryImage';

/**
 * Props.
 */
type GalleryItemProps = {
  src: string;
  blurDataURL: string;
  dimensions: {
    width: number;
    height: number;
  };
};

/**
 * @param {GalleryItemProps} props Props.
 * @returns React component.
 */
export default function GalleryItem({
  src,
  blurDataURL,
  dimensions: {width, height},
}: GalleryItemProps) {
  return (
    <Item
      original={src}
      thumbnail={src}
      alt=""
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
