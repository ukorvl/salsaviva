import {Metadata} from 'next';
import clsx from 'clsx';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import getTextSlideIntoViewVarinats from '@/lib/framerMotion/variants/getTextSlideIntoViewVarinats';
import Philosophy from '@/components/pages/About/Philosophy';
import CATLink from '@/components/shared/CATLink/CATLink';
import BlockWithImage from '@/components/pages/About/BlockWithImage';
import WhyJoinBlock from '@/components/pages/About/WhyJoinBlock/WhyJoinBlock';
import metadataBase from '../metadata';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'Salsaviva - About',
    description: `Get ready to discover the Magic at Salsaviva. Read about our
    welcoming and inspiring community of dancers`,
    ...metadataBase.openGraph,
  },
};

const titleVariants = getTextSlideIntoViewVarinats('left');

const containerCn = clsx('flex', 'flex-col', 'min-h-screen', 'w-full');
const titleCn = clsx('text-8xl', 'mt-24', 'text-center', 'text-accent2');
const aboutCn = clsx('text-8xl', 'text-center', 'pl-48', 'text-accent2');
const minorTextCn = clsx('text-6xl', 'text-white');
const contentCn = clsx('flex', 'flex-col', 'items-center', 'justify-center', 'w-full');
const CATLinkCn = clsx('mt-16');
const danceTitleCn = clsx('text-accent3', 'font-bolder');

/**
 * @returns React component.
 */
export default function About() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        className={titleCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.VERY_LONG, type: 'spring'}}
        as="h1"
      >
        SALSAVIVA
      </AppearInViewport>
      <AppearInViewport
        className={aboutCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.VERY_LONG, type: 'spring', delay: 1}}
        as="h3"
      >
        <span className={minorTextCn}>is about</span>YOU!
      </AppearInViewport>
      <div className={contentCn}>
        <Philosophy />
        <BlockWithImage
          text={
            <div>
              We are here to share with you our <span className="text-accent1">passion</span> and{' '}
              <span className="text-accent1">knowledge</span> in social dances. And inspire you to
              become a better, more confident and happy person - inside and outside the dancefloor.
            </div>
          }
          imageFilename="about.1.jpg"
          imageAlt=""
        />
        <WhyJoinBlock />
        <BlockWithImage
          text={
            <div>
              At SalsaViva we specialize in <span className="text-accent1">Social Dancing</span>{' '}
              with styles such as: <span className={danceTitleCn}>SALSA/MAMBO</span>,{' '}
              <span className={danceTitleCn}>BACHATA</span>,{' '}
              <span className={danceTitleCn}>KIZOMBA</span> and{' '}
              <span className={danceTitleCn}>ZOUK</span>, In addition to this, we also offer MIXED
              LATIN CLASSES like Lady Style.
            </div>
          }
          imageFilename="about.1.jpg"
          imageAlt=""
          reverse
        />
      </div>
      <CATLink
        text="WANT TO JOIN?"
        className={CATLinkCn}
        path="/contact"
        customTransition={{delay: 0.5}}
      />
    </div>
  );
}
