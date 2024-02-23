import React from 'react';

/**
 *
 */
type DynamicFormBgProps = {
  steps: number;
  maxSteps: number;
};

/**
 * @param {DynamicFormBgProps} props Props.
 * @returns {React.JSX.Element} Background for the contact form.
 */
export const DynamicFormBg = ({steps, maxSteps}: DynamicFormBgProps) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">SV</h2>
        </div>
      </div>
    </div>
  );
};
