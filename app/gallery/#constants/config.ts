/**
 * @file Gallery images configuration.
 */

const config: Array<{fileName: string}> = [
  {fileName: '/0.png'},
  {fileName: '/1.png'},
  {fileName: '/2.png'},
  {fileName: '/3.png'},
  {fileName: '/4.png'},
  {fileName: '/5.png'},
  {fileName: '/6.png'},
  {fileName: '/7.png'},
  {fileName: '/8.png'},
  {fileName: '/9.png'},
  {fileName: '/10.png'},
  {fileName: '/11.png'},
];

export default config.map(({fileName}) => ({
  src: `/gallery/${fileName}`,
  blurDataURL: `/gallery/blured/${fileName}`,
}));
