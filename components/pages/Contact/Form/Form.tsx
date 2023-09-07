'use client';

import {useFormik} from 'formik';
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
  const {name, email, message} = formConfig;
  const formik = useFormik<ContactFormData>({
    initialValues,
    onSubmit: values => {},
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField {...name} />
      <TextField {...message} />
      <div>Select your preferred method of contact.</div>
      <TextField {...email} />
    </form>
  );
}
