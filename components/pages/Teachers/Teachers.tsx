/**
 * @file Organizes {@link Teacher} components in a grid.
 */

'use client';

import clsx from 'clsx';
import teachersListConfig from './teachersListConfig';
import Teacher from './Teacher';
import AppearInViewport from '../../shared/AppearInViewport/AppearInViewport';

const containerCn = clsx('grid', 'grid-cols-3', 'grid-rows-2', 'w-full', 'h-full', 'grow');

/**
 * @returns React component.
 */
export default function Teachers() {
  return (
    <AppearInViewport
      className={containerCn}
      transition={{staggerChildren: 0.2, delayChildren: 0.5}}
    >
      {teachersListConfig.map(teacher => (
        <Teacher
          key={teacher.id}
          {...teacher}
        />
      ))}
    </AppearInViewport>
  );
}
