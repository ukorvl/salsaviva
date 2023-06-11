import {Metadata} from 'next';
import Button from '@/components/Button/Button';

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
  return (
    <div>
      <Button>Submit</Button>
      <Button size="lg">Submit</Button>
      <Button size="sm">Submit</Button>
      <Button variant="alternate">Submit</Button>
      <Button outline>Submit</Button>
      <Button
        variant="alternate"
        outline
      >
        Submit
      </Button>
    </div>
  );
}
