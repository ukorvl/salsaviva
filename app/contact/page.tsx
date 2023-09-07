import Form from '@/components/pages/Contact/Form/Form';
import clsx from 'clsx';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Salsaviva - Contact',
    description: 'Connect and dance: Contacts for Your next breathtaking dancing adventure',
  },
};

const containerCn = clsx('flex', 'min-h-screen', 'w-full');

/**
 * @returns React component.
 */
export default function Contact() {
  return (
    <div className={containerCn}>
      <Form />
    </div>
  );
}
