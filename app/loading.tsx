import clsx from 'clsx';
import Loader from '@/components/Loader/Loader';

const containerCn = clsx('grow', 'flex', 'justify-center', 'items-center', 'h-full', 'w-full');

/**
 * @returns React component.
 */
export default function Loading() {
  return (
    <div className={containerCn}>
      <Loader grow />
    </div>
  );
}
