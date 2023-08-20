import clsx from 'clsx';
import Mail from './Mail';
import Phone from './Phone';
import Location from './Location';

const footerCn = clsx('container', 'flex', 'justify-between', 'px-24', 'pt-12', 'pb-24');

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
