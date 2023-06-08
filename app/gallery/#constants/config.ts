/**
 * @file Gallery images configuration.
 */

import type {LazyImageProps} from '../#components/LazyImage/LazyImage';

const config: Omit<LazyImageProps, 'blurDataURL'>[] = [{src: '/1.png'}, {src: '/2.png'}];

// eslint-disable-next-line jsdoc/require-jsdoc
function addBlurPrefix(src: string) {
  return `/blured${src}`;
}

export default config.map(({src}) => ({src, blurDataURL: addBlurPrefix(src)}));
