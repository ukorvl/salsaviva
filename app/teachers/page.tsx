import {Metadata} from 'next';
import clsx from 'clsx';
import TextReveal from '@/components/TextReveal/TextReveal';
import {default as TeachersComponent} from '@/components/Teachers/Teachers';
import CATLink from '@/components/CATLink/CATLink';

const pageDescription = 'Meet your inspirational guides in the world of social dance';

export const metadata: Metadata = {
  title: 'Teachers',
  openGraph: {
    title: 'Salsaviva - Teachers',
    description: pageDescription,
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
const titleCn = clsx('text-7xl', 'mt-24', 'ml-4');
const subTitleCn = clsx('text-4xl', 'my-4', 'w-2/3', 'ml-4');
const CATLinkCn = clsx('mt-16');

/**
 * @returns React component.
 */
export default function Teachers() {
  return (
    <div className={containerCn}>
      <TextReveal
        text="Our team"
        className={titleCn}
      />
      <TextReveal
        text={pageDescription}
        className={subTitleCn}
      />
      <TeachersComponent />
      <CATLink
        text="BOOK A LESSON"
        className={CATLinkCn}
        path="/contact"
      />
    </div>
  );
}
