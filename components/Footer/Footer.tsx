import clsx from 'clsx';
import Icons from './Icons';
import Location from './Location';
import Mail from './Mail';
import Phone from './Phone';

const footerCn = clsx('container', 'columns-4', 'xs:columns-1', 'mt-auto', 'pb-12');

/**
 * @returns React component.
 */
export default function Footer() {
  return (
    <footer className={footerCn}>
      <Icons />
      <Mail />
      <Phone />
      <Location />
    </footer>
  );
}
