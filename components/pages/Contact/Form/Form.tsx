'use client';

import {useFormik} from 'formik';
import Button from '@/components/shared/Button/Button';
import validationSchema, {ContactFormData} from './validationSchema';
import TextField from '../TextField/TextField';
import formConfig from './formConfig';

const initialValues = {
  name: '',
  email: '',
  message: '',
} satisfies ContactFormData;

/**
 * @returns React element.
 */
export default function Form() {
  const {name, email, message, tel, telegram} = formConfig;
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onSubmit = (values: ContactFormData) => {
    console.log(values);
  };

  const {handleSubmit, getFieldProps, touched, errors, isSubmitting, isValid, dirty} =
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
      <TextField {...email} />
      <Button
        type="submit"
        disabled={isSubmitting || !isValid || !dirty}
      >
        Submit
      </Button>
    </form>
  );
}
