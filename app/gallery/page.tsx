import {Metadata} from 'next';
import clsx from 'clsx';
import Gallery from '@/components/pages/Gallery/Gallery';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import './styles.css';

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
const galleryTextItem = clsx(
  'p-8',
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  'gap-8',
  'text-center',
);
const titleCn = clsx('text-4xl');
const textCn = clsx('text-xl');
const subTitleCn = clsx('text-2xl');

/**
 * @returns React component.
 */
export default function GalleryPage() {
  return (
    <div className={containerCn}>
      <div className={galleryTextItem}>
        <AppearInViewport
          className={titleCn}
          transition={{delay: 0.5, duration: TransitionDuration.LONG}}
          as="h1"
        >
          SALSAVIVA GALLERY
        </AppearInViewport>
        <AppearInViewport
          transition={{delay: 1.5, duration: TransitionDuration.LONG}}
          className={textCn}
        >
          Welcome to our vibrant dancing studio image gallery, where the rhythm comes alive through
          captivating moments frozen in time.
        </AppearInViewport>
        <AppearInViewport
          transition={{delay: 3, duration: TransitionDuration.VERY_LONG}}
          className={subTitleCn}
        >
          Enjoy!
        </AppearInViewport>
      </div>
      <Gallery />
      <div className={galleryTextItem}>
        <AppearInViewport
          className={subTitleCn}
          as="h3"
        >
          Whant more? Follow us on social media!
        </AppearInViewport>
        <SocialIcons iconSize="2x" />
      </div>
    </div>
  );
}
