import {Metadata} from 'next';
import Gallery from '@/components/Gallery/Gallery';

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
export default function GalleryPage() {
  return <Gallery />;
}
