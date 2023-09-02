// eslint-disable-next-line jsdoc/require-jsdoc
export type GalleryConfigItem = {
  src: string;
  blurDataURL: string;
  width: number;
  height: number;
  alt?: string;
};

/**
 * Gallery images configuration.
 */
const config = [
  {fileName: 'gallery.0.jpg', width: 640, height: 425, alt: ''},
  {fileName: 'gallery.1.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.2.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.3.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.4.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.5.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.6.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.7.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.8.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.9.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.10.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.11.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.12.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.13.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.14.jpg', width: 920, height: 600, alt: ''},
  {fileName: 'gallery.15.jpg', width: 1280, height: 854, alt: ''},
] as const;

export default config.map<GalleryConfigItem>(({fileName, ...rest}) => ({
  ...rest,
  src: `/images/${fileName}`,
  blurDataURL: `/images/blured/${fileName}`,
}));
