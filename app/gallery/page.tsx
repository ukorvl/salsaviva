import {Metadata} from 'next';
import clsx from 'clsx';
import Gallery from '@/components/pages/Gallery/Gallery';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import './styles.css';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';

export const metadata: Metadata = {
  title: 'Gallery',
  openGraph: {
    title: 'Salsaviva - Gallery',
    description: 'Explore the vibrant world of social dance',
  },
};

const containerCn = clsx(
  'grow',
  'w-full',
  'h-full',
  'grid',
  'grid-rows-auto',
  'sm: grid-cols-1',
  'md:grid-cols-2',
  'lg:grid-cols-3',
  '2xl:grid-cols-4',
);
const galleryFirstItem = clsx('p-8', 'flex', 'flex-col', 'items-center', 'justify-center');
const titleCn = clsx('text-4xl', 'mb-2');

/**
 * @returns React component.
 */
export default function GalleryPage() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        className={galleryFirstItem}
        transition={{delay: 0.5, duration: 2, staggerChildren: 0.5, delayChildren: 0.5}}
      >
        <div className={titleCn}>SALSAVIVA GALLERY</div>
        <div>
          Welcome to our vibrant dancing studio image gallery, where the rhythm comes alive through
          captivating moments frozen in time.
        </div>
      </AppearInViewport>
      <Gallery />
      <AppearInViewport
        className={galleryFirstItem}
        transition={{delay: 0.5, duration: 2, staggerChildren: 0.5, delayChildren: 0.5}}
      >
        <div>
          Whant more?
          <SocialIcons iconSize="2x" />
        </div>
      </AppearInViewport>
    </div>
  );
}
