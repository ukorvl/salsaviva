import {useField} from 'formik';
import formConfig from './formConfig';
import type {ContactFormData} from './validationSchema';
import TextField from '../TextField/TextField';
import ErrorMessage from './ErrorMessage';

/**
 * Props.
 */
type FormFieldProps = {
  name: keyof ContactFormData;
};

/**
 * @param {FormFieldProps} props Props.
 * @returns React element.
 */
export default function FormField({name}: FormFieldProps) {
  const configData = formConfig[name];
  const [field, meta] = useField(name);
  const hasError = meta.touched && !!meta.error;

  return (
    <>
      <TextField
        {...configData}
        {...field}
      />
      <ErrorMessage
        hasError={hasError}
        message={meta.error}
      />
    </>
  );
}
