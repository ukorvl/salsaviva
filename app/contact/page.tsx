import {Metadata} from 'next';
import clsx from 'clsx';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import getTextSlideIntoViewVarinats from '@/lib/framerMotion/variants/getTextSlideIntoViewVarinats';
import FormWrapper from '@/components/pages/Contact/FormWrapper/FormWrapper';
import metadataBase from '../metadata';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Salsaviva - Contact',
    description: 'Connect and dance: Contacts for Your next breathtaking dancing adventure',
    ...metadataBase.openGraph,
  },
};

const titleVariants = getTextSlideIntoViewVarinats('right');

const containerCn = clsx('flex', 'flex-col', 'min-h-screen', 'w-full');
const titleCn = clsx('text-8xl', 'mt-24', 'ml-4', 'text-center');

/**
 * @returns React component.
 */
export default function Contact() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        className={titleCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.LONG, type: 'spring', bounce: 0}}
      >
        CONTACT US
      </AppearInViewport>
      <FormWrapper />
    </div>
  );
}
