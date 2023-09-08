import {useState} from 'react';
import clsx from 'clsx';
import Form from '../Form/Form';

const wrapperCn = clsx();

/**
 * @returns React element.
 */
export default function FormWrapper() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={wrapperCn}>
      {isSubmitted ? (
        <div>Thank you for your submission.</div>
      ) : (
        <Form onSubmit={() => setIsSubmitted(true)} />
      )}
    </div>
  );
}
