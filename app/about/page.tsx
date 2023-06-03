import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'Salsaviva - About',
    description: `Get ready to discover the Magic at Salsaviva. Read about our
    welcoming and inspiring community of dancers`,
  },
};

/**
 * @returns React component.
 */
export default function About() {
  return <div>About</div>;
}
