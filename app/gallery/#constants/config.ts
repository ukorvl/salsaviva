/**
 * @file Gallery images configuration.
 */

import type {LazyImageProps} from '../#components/AnimatedImage/AnimatedImage';

const config: Omit<LazyImageProps, 'blurDataURL'>[] = [
  {src: '/0.png'},
  {src: '/1.png'},
  {src: '/2.png'},
  {src: '/3.png'},
  {src: '/4.png'},
  {src: '/5.png'},
  {src: '/6.png'},
  {src: '/7.png'},
  {src: '/8.png'},
  {src: '/9.png'},
  {src: '/10.png'},
  {src: '/11.png'},
];

// eslint-disable-next-line jsdoc/require-jsdoc
function addBlurPrefix(src: string) {
  return `/blured${src}`;
}

export default config.map(({src}) => ({src, blurDataURL: addBlurPrefix(src)}));
