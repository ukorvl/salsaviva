'use client';

import {useState} from 'react';
import TeachersBynamicBg from './TeachersDynamicBg';
import teachersListConfig from './teachersListConfig';
import Teacher from './Teacher';
import ViewportBlock from './ViewportBlock';

/**
 * @returns React component.
 */
export default function Teachers() {
  const [bgSrc, setBgSrc] = useState<string | null>(null);

  return (
    <div>
      {teachersListConfig.map(t => (
        <ViewportBlock
          key={t.id}
          setBgSrc={setBgSrc}
          bgSrc={t.imgSrc}
        >
          <Teacher {...t} />
        </ViewportBlock>
      ))}
      <TeachersBynamicBg bgSrc={bgSrc} />
    </div>
  );
}
