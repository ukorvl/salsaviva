/**
 * Gallery images configuration.
 */
const config = [
  {fileName: 'gallery.0.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.1.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.2.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.3.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.4.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.5.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.6.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.7.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.8.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.9.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.10.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.11.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.12.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.13.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.14.jpg', dimensions: {width: 920, height: 600}},
  {fileName: 'gallery.15.jpg', dimensions: {width: 920, height: 600}},
] as const;

export default config.map(({fileName, dimensions}) => ({
  dimensions,
  src: `/images/${fileName}`,
  blurDataURL: `/images/blured/${fileName}`,
  lowQualitySrc: `/images/low-quality/${fileName}`,
}));
