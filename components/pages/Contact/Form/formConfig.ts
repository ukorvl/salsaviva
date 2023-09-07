import {TextFieldProps} from '../TextField/TextField';
import {ContactFormData} from './validationSchema';

/**
 * Type for the form data, enforces inclusion of all required props.
 */
type FormConfig = Record<keyof ContactFormData, TextFieldProps>;

const formConfig: FormConfig = {
  name: {
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  },
  email: {
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
  },
  tel: {
    label: 'Phone',
    type: 'tel',
    placeholder: 'Phone',
  },
  telegram: {
    label: 'Telegram',
    type: 'text',
    placeholder: 'Telegram',
  },
  message: {
    label: 'Message',
    type: 'text',
    placeholder: 'Message',
  },
};

export default formConfig;
