import clsx from 'clsx';
import Icons from './Icons';
import Location from './Location';

const footerCn = clsx('container', 'columns-3', 'xs:columns-1');

/**
 * @returns React component.
 */
export default function Footer() {
  return (
    <footer className={footerCn}>
      <Icons />
      <Location />
    </footer>
  );
}
