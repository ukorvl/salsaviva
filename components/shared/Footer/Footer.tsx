import clsx from 'clsx';
import Mail from './Mail';
import Phone from './Phone';
import Location from './Location';

const footerCn = clsx('grid', 'sm:grid-cols-1', 'lg:grid-cols-3', 'p-24', 'text-lg');

/**
 * @returns React component.
 */
export default function Footer() {
  return (
    <footer className={footerCn}>
      <Phone />
      <Mail />
      <Location />
    </footer>
  );
}
