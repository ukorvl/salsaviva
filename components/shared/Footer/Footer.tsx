import clsx from 'clsx';
import Mail from './Mail';
import Phone from './Phone';
import Location from './Location';

const footerCn = clsx('h-48', 'md:h-auto', 'md:grid', 'md:grid-cols-3', 'md:p-24', 'text-base');

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
