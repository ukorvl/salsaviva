import {createContext} from 'react';

/**
 * Type of the context.
 */
type FormStepsContextType = {
  steps: number;
  setSteps: (steps: number) => void;
};

const FormStepsContext = createContext({
  steps: 0,
  // eslint-disable-next-line jsdoc/require-jsdoc
  setSteps: () => {},
} as FormStepsContextType);

FormStepsContext.displayName = 'FormStepsContext';

export {FormStepsContext};
