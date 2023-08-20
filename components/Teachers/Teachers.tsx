'use client';

import clsx from 'clsx';
import teachersListConfig from './teachersListConfig';
import Teacher from './Teacher';

const containerCn = clsx('grid', 'grid-cols-4', 'w-full', 'h-full', 'grow');

/**
 * @returns React component.
 */
export default function Teachers() {
  return (
    <div className={containerCn}>
      {teachersListConfig.map(teacher => (
        <Teacher
          key={teacher.name}
          {...teacher}
        />
      ))}
    </div>
  );
}
