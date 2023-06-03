import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Salsaviva - Contact',
    description: 'Connect and dance: Contacts for Your next breathtaking dancing adventure',
  },
};

/**
 * @returns React component.
 */
export default function Contact() {
  return <div>Contact</div>;
}
