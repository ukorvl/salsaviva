import {useState} from 'react';
import clsx from 'clsx';
import Form from '../Form/Form';
import SubmittedForm from './SubmittedForm';

const wrapperCn = clsx();

/**
 * @returns React element.
 */
export default function FormWrapper() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={wrapperCn}>
      {isSubmitted ? <SubmittedForm /> : <Form onSubmit={() => setIsSubmitted(true)} />}
    </div>
  );
}
