'use client';

import {useState} from 'react';
import clsx from 'clsx';
import Form from '../Form/Form';
import SubmittedForm from './SubmittedForm';

/**
 * @returns React element.
 */
export default function FormWrapper() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const wrapperCn = clsx('w-96', 'sm:w-100', 'mx-auto', 'mt-8');

  return (
    <div className={wrapperCn}>
      {isSubmitted ? <SubmittedForm /> : <Form onSubmit={() => setIsSubmitted(true)} />}
    </div>
  );
}
