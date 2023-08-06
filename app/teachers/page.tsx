import {Metadata} from 'next';
import clsx from 'clsx';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import {default as TeachersComponent} from '@/components/Teachers/Teachers';

const pageDescription = 'Meet your inspirational guides in the world of social dance';

export const metadata: Metadata = {
  title: 'Teachers',
  openGraph: {
    title: 'Salsaviva - Teachers',
    description: pageDescription,
  },
};

const containerCn = clsx('flex', 'flex-col', 'items-start', 'justify-start');
const titleCn = clsx('text-4xl', 'font-bold', 'mb-4', 'w-2/3');

/**
 * @returns React component.
 */
export default function Teachers() {
  return (
    <div className={containerCn}>
      <AnimatedText
        text={pageDescription}
        className={titleCn}
      />
      <TeachersComponent />
    </div>
  );
}
