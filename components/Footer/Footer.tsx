import clsx from 'clsx';
import Mail from './Mail';
import Phone from './Phone';
import Location from './Location';

const footerCn = clsx('container', 'columns-3', 'xs:columns-1', 'mt-auto', 'pb-12');

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
