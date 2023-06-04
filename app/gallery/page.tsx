import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  openGraph: {
    title: 'Salsaviva - Gallery',
    description: 'Explore the vibrant world of social dance',
  },
};

/**
 * @returns React component.
 */
export default function Gallery() {
  return <div>Gallery</div>;
}
