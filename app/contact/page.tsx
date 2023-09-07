import {Metadata} from 'next';
import clsx from 'clsx';
import Form from '@/components/pages/Contact/Form/Form';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import getTextSlideIntoViewVarinats from '@/lib/framerMotion/variants/getTextSlideIntoViewVarinats';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Salsaviva - Contact',
    description: 'Connect and dance: Contacts for Your next breathtaking dancing adventure',
  },
};

const titleVariants = getTextSlideIntoViewVarinats('left');

const containerCn = clsx('flex', 'flex-col', 'min-h-screen', 'w-full');
const titleCn = clsx('text-8xl', 'mt-24', 'ml-4');

/**
 * @returns React component.
 */
export default function Contact() {
  return (
    <div className={containerCn}>
      <AppearInViewport
        className={titleCn}
        variants={titleVariants}
        transition={{duration: TransitionDuration.VERY_LONG, type: 'spring', bounce: 0.5}}
      >
        CONTACT US
      </AppearInViewport>
      <Form />
    </div>
  );
}
