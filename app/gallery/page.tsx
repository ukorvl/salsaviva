import {Metadata} from 'next';
import clsx from 'clsx';
import Gallery from '@/components/pages/Gallery/Gallery';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import getTextSlideIntoViewVarinats from '@/lib/framerMotion/variants/getTextSlideIntoViewVarinats';
import metadataBase from '../metadata';
import getSocialicons from '../socialIcons';
import './styles.css';

export const metadata: Metadata = {
  title: 'Gallery',
  openGraph: {
    title: 'Salsaviva - Gallery',
    description: 'Explore the vibrant world of social dance',
    ...metadataBase.openGraph,
  },
};

const containerCn = clsx(
  'flex',
  'flex-col',
  'items-start',
  'justify-start',
  'min-h-screen',
  'w-full',
);
const titleCn = clsx('lg:text-8xl', 'text-6xl', 'mt-24', 'ml-4');
const bottomText = clsx('text-2xl');
const bottomTextContainerCn = clsx(
  'flex',
  'flex-col',
  'mt-16',
  'items-center',
  'justify-center',
  'w-full',
  'gap-4',
  'p-4',
  'text-center',
);
const subTitleCn = clsx('text-4xl', 'my-12', 'lg:my-4', 'lg:w-2/3', 'ml-4');
const titleVariants = getTextSlideIntoViewVarinats('left');

/**
 * @returns React component.
 */
export default function GalleryPage() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        as="h1"
        className={titleCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.VERY_LONG, type: 'spring', bounce: 0.5}}
      >
        GALLERY
      </AppearInViewport>
      <AppearInViewport
        className={subTitleCn}
        transition={{delay: 1, duration: TransitionDuration.LONG}}
      >
        Dive into our vibrant world of social dance
      </AppearInViewport>
      <Gallery />
      <div className={bottomTextContainerCn}>
        <AppearInViewport
          className={bottomText}
          as="h3"
        >
          Want more? Follow us on social media
        </AppearInViewport>
        <SocialIcons icons={getSocialicons('2x')} />
      </div>
    </div>
  );
}
