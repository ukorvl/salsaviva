'use client';

import React, {ReactNode, useCallback, useState} from 'react';
import clsx from 'clsx';
import {FormStepsContext} from './FormStepsContext';

/**
 * Props.
 */
type DynamicFormBgProps = {
  children: ReactNode;
};

/**
 * @param {DynamicFormBgProps} props Props.
 * @returns {React.JSX.Element} Background for the contact form.
 */
const DynamicFormBg = ({children}: DynamicFormBgProps) => {
  const containerCn = 'relative';
  const bgTextCn = clsx(
    'absolute left-0 top-0 bg-gradient-to-r text-[500px] font-extrabold opacity-40',
    'from-accent0 to-accent3 bg-clip-text text-transparent',
  );
  const maxSteps = 3;
  const minSteps = 0;
  const [steps, setSteps] = useState(0);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const stepsSetter = useCallback(
    (steps: number) => {
      if (steps > maxSteps) {
        setSteps(maxSteps);
      }
      if (steps < minSteps) {
        setSteps(minSteps);
      }
      setSteps(steps);
    },
    [setSteps],
  );

  return (
    <div className={containerCn}>
      <FormStepsContext.Provider value={{steps, setSteps: stepsSetter}}>
        {children}
      </FormStepsContext.Provider>
      <div
        aria-hidden="true"
        className={bgTextCn}
      >
        SV {steps}
      </div>
    </div>
  );
};

export default DynamicFormBg;
