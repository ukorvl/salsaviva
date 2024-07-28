'use client';

import clsx from 'clsx';
import useIsMobile from '@/lib/shared/useIsMobile';
import teachersListConfig from './teachersListConfig';
import Teacher from './TeacherDesktop';
import AppearInViewport from '../../shared/AppearInViewport/AppearInViewport';
import TeacherMobile from './TeacherMobile';

const containerCn = clsx(
  'grid',
  'grid-cols-1',
  'lg:grid-cols-3',
  'lg:grid-rows-2',
  'w-full',
  'h-full',
  'grow',
);

/**
 * @returns React component.
 */
export default function Teachers() {
  const [isMobile] = useIsMobile();
  const Component = isMobile ? TeacherMobile : Teacher;

  return (
    <AppearInViewport
      className={containerCn}
      transition={{staggerChildren: 0.2, delayChildren: 0.75}}
    >
      {teachersListConfig.map(teacher => (
        <Component
          key={teacher.name}
          {...teacher}
        />
      ))}
    </AppearInViewport>
  );
}
