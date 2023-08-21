'use client';

import clsx from 'clsx';
import {m} from 'framer-motion';
import teachersListConfig from './teachersListConfig';
import Teacher from './Teacher';
import AppearInViewport from '../AppearInViewport/AppearInViewport';

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
          key={teacher.name}
          {...teacher}
        />
      ))}
    </AppearInViewport>
  );
}
