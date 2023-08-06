'use client';

import {useState} from 'react';
import TeachersBynamicBg from './TeachersDynamicBg';
import TeachersList from './TeachersList';

/**
 * @returns React component.
 */
export default function Teachers() {
  const [bgSrc, setBgSrc] = useState(null);

  return (
    <div>
      <TeachersList />
      <TeachersBynamicBg bgSrc={bgSrc} />
    </div>
  );
}
