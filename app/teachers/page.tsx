import {Metadata} from 'next';
import clsx from 'clsx';
import {default as TeachersComponent} from '@/components/pages/Teachers/Teachers';
import CATLink from '@/components/shared/CATLink/CATLink';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import getTextSlideIntoViewVarinats from '@/lib/framerMotion/variants/getTextSlideIntoViewVarinats';
import metadataBase from '../metadata';

const pageDescription = 'Meet your inspirational guides in the world of social dance';

export const metadata: Metadata = {
  title: 'Teachers',
  openGraph: {
    title: 'Salsaviva - Teachers',
    description: pageDescription,
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
const titleCn = clsx('text-8xl', 'mt-24', 'ml-4');
const subTitleCn = clsx('text-4xl', 'my-4', 'w-2/3', 'ml-4');
const CATLinkCn = clsx('mt-16');

const titleVariants = getTextSlideIntoViewVarinats('left');

/**
 * @returns React component.
 */
export default function Teachers() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        as="h1"
        className={titleCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.VERY_LONG, type: 'spring', bounce: 0.5}}
      >
        OUR TEAM
      </AppearInViewport>
      <AppearInViewport
        className={subTitleCn}
        transition={{delay: 1, duration: TransitionDuration.LONG}}
      >
        {pageDescription}
      </AppearInViewport>
      <TeachersComponent />
      <CATLink
        text="BOOK A LESSON"
        className={CATLinkCn}
        path="/contact"
        customTransition={{delay: 0.5}}
        rel="noopener noreferrer"
      />
    </div>
  );
}
