'use client';

import {useFormik} from 'formik';
import Button from '@/components/shared/Button/Button';
import validationSchema, {ContactFormData} from './validationSchema';
import TextField from '../TextField/TextField';
import formConfig from './formConfig';

/**
 * Props.
 */
type FormProps = {
  onSubmit?: () => void;
};

const initialValues = {
  name: '',
  email: '',
  message: '',
} satisfies ContactFormData;

/**
 * @param {FormProps} props Props.
 * @returns React element.
 */
export default function Form({onSubmit: onSuccessSubmit}: FormProps) {
  const {name, email, message, tel, telegram} = formConfig;
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onSubmit = (values: ContactFormData) => {
    console.log(values);
    resetForm();
    onSuccessSubmit && onSuccessSubmit();
  };

  const {handleSubmit, getFieldProps, touched, errors, isSubmitting, isValid, dirty, resetForm} =
    useFormik<ContactFormData>({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        {...name}
        {...getFieldProps(name.name)}
      />
      <TextField
        {...message}
        {...getFieldProps(message.name)}
      />
      <div>Select your preferred method of contact.</div>
      <TextField
        {...email}
        {...getFieldProps(email.name)}
      />
      <TextField
        {...tel}
        {...getFieldProps(tel.name)}
      />
      <TextField
        {...telegram}
        {...getFieldProps(telegram.name)}
      />
      <Button
        type="submit"
        disabled={isSubmitting || !isValid || !dirty}
      >
        Submit
      </Button>
    </form>
  );
}
