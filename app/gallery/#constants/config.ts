/**
 * Gallery images configuration.
 */
const config = [
  {fileName: '/gallery.0.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.1.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.2.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.3.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.4.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.5.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.6.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.7.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.8.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.9.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.10.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.11.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.12.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.13.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.14.png', dimensions: {width: 920, height: 600}},
  {fileName: '/gallery.15.png', dimensions: {width: 920, height: 600}},
] as const;

export default config.map(({fileName, dimensions}) => ({
  dimensions,
  src: `/images/${fileName}`,
  blurDataURL: `/images/blured/${fileName}`,
  lowQualitySrc: `/images/low-quality/${fileName}`,
}));
