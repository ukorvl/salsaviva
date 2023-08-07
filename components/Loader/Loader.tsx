/**
 * @file In order to render loader on the server we don't use framer motion here.
 */

import clsx from 'clsx';

/**
 * Loader size.
 */
type LoaderSize = 'sm' | 'lg' | 'md';

/**
 * Loader props.
 */
type LoaderProps = {
  /** @default md */
  size?: LoaderSize;
};

/**
 * @param {LoaderProps} props Props.
 * @returns React component.
 */
export default function Loader({size = 'md'}: LoaderProps) {
  const containerClassName = clsx('flex justify-content-center align-items-center p-4');

  const bouncingElementClassName = clsx('motion-safe:animate-bounce h-5 w-5 m-2 bg-white', size);

  //const bouncingElementViewBox = '0 0 24 24';

  return (
    <div
      className={containerClassName}
      role="status"
    >
      {[...new Array(3).keys()].map(x => (
        <div
          key={x}
          className={bouncingElementClassName}
        />
      ))}
    </div>
  );
}

// function mapSizeToRem(s: LoaderSize) {
//   switch (s) {
//     case 'md':
//       return 1;
//     case 'lg':
//       return 2;
//     case 'sm':
//       return 0.75;
//     default:
//       return 1;
//   }
// }
