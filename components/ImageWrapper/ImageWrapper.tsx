import Image, {ImageProps} from 'next/image';
import {forwardRef} from 'react';
import useNetworkSpeed from '@/lib/shared/useNetworkSpeed';

/**
 * Props.
 */
type ImageWrapperProps = Omit<ImageProps, 'alt'> & {
  alt?: string;
};

/**
 * Image wrapper, that uses next/image.
 * Takes care of network speed and quality. Fills all avialiable space by default.
 * @param props Props.
 * @returns React component.
 */
const ImageWrapper = forwardRef<HTMLImageElement, ImageWrapperProps>(function ImageWrapper(
  {alt = '', quality, fill = true, placeholder = 'blur', ...props},
  ref,
) {
  const [, isFast] = useNetworkSpeed();
  const computedQuality = quality ?? (isFast ? 75 : 25);

  return (
    <Image
      ref={ref}
      placeholder={placeholder}
      fill={fill}
      quality={computedQuality}
      alt={alt}
      {...props}
    />
  );
});

export default ImageWrapper;
