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
    name: 'name',
  },
  email: {
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
    name: 'email',
  },
  tel: {
    label: 'Phone',
    type: 'tel',
    placeholder: 'Phone',
    name: 'tel',
  },
  telegram: {
    label: 'Telegram',
    type: 'text',
    placeholder: 'Telegram',
    name: 'telegram',
  },
  message: {
    label: 'Message',
    type: 'text',
    placeholder: 'Message',
    name: 'message',
  },
};

export default formConfig;
