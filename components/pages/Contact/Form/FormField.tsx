import {useField} from 'formik';
import clsx from 'clsx';
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
  const fieldCn = clsx('relative', 'h-12');

  return (
    <div className={fieldCn}>
      <TextField
        {...configData}
        {...field}
      />
      <ErrorMessage
        hasError={hasError}
        message={meta.error}
      />
    </div>
  );
}
