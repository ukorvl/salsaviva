'use client';

import {useState} from 'react';
import clsx from 'clsx';
import useFormspree from '@/lib/formspree/useFormspree';
import Form from '../Form/Form';
import SubmittedForm from './SubmittedForm';
import ErrorSubmitForm from './ErrorSubmitForm';
import DynamicFormBg from '../DynamicFormBg/DynamicFormBg';
import {ContactFormData} from '../Form/validationSchema';

/**
 * Form wrapper component props.
 */
type FormWrapperProps = {
  formspreeId: string;
};

/**
 * @param {FormWrapperProps} props Props.
 * @returns React element.
 */
export default function FormWrapper({formspreeId}: FormWrapperProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const wrapperCn = clsx('w-96', 'sm:w-100', 'mx-auto', 'mt-8', 'z-10');
  const [_, submit] = useFormspree<ContactFormData>(formspreeId);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const onSubmit = async (values: ContactFormData) => {
    try {
      setIsError(false);
      await submit(values);
      setIsSubmitted(true);
    } catch {
      setIsError(true);
    }
  };

  // eslint-disable-next-line jsdoc/require-jsdoc
  const render = () => {
    if (isError) {
      return <ErrorSubmitForm />;
    }

    if (isSubmitted) {
      return <SubmittedForm />;
    }

    return <Form onSubmit={onSubmit} />;
  };

  // here animation on swich screen should occur

  return (
    <DynamicFormBg>
      <div className={wrapperCn}>{render()}</div>
    </DynamicFormBg>
  );
}
