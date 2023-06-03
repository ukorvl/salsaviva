import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'Salsaviva - Teachers',
    description: 'Your inspirational guides in the world of social dance',
  },
};

/**
 * @returns React component.
 */
export default function About() {
  return <div>About</div>;
}
