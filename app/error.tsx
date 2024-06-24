'use client';

import clsx from 'clsx';
import Button from '@/components/shared/Button/Button';

const errContainerCn = clsx('pt-64', 'flex', 'flex-col', 'gap-8');

/**
 * @param {{error: Error; reset: () => void}} props Props.
 * @returns React component.
 */
export default function Error({reset}: {error: Error; reset: () => void}) {
  return (
    <div className={errContainerCn}>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
