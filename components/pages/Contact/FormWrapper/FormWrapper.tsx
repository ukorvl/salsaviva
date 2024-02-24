'use client';

import {useState} from 'react';
import clsx from 'clsx';
import Form from '../Form/Form';
import SubmittedForm from './SubmittedForm';
import ErrorSubmitForm from './ErrorSubmitForm';
import DynamicFormBg from '../DynamicFormBg/DynamicFormBg';

/**
 * @returns React element.
 */
export default function FormWrapper() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const wrapperCn = clsx('w-96', 'sm:w-100', 'mx-auto', 'mt-8', 'z-10');

  // eslint-disable-next-line jsdoc/require-jsdoc
  const render = () => {
    if (isError) {
      return <ErrorSubmitForm />;
    }

    if (isSubmitted) {
      return <SubmittedForm />;
    }

    return (
      <Form
        onErrorSubmit={() => setIsError(true)}
        onSubmit={() => setIsSubmitted(true)}
      />
    );
  };

  return (
    <DynamicFormBg>
      <div className={wrapperCn}>{render()}</div>
    </DynamicFormBg>
  );
}
