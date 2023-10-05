'use client';

import {FormikContext, useFormik} from 'formik';
import Button from '@/components/shared/Button/Button';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import useFormspree from '@/lib/formspree/useFormspree';
import {env} from '@/app/env.mjs';
import validationSchema, {ContactFormData} from './validationSchema';
import FormField from './FormField';

/**
 * Props.
 */
type FormProps = {
  onSubmit?: () => void;
};

const initialValues = {
  name: '',
  message: '',
} satisfies ContactFormData;

const {NEXT_PUBLIC_FORMSPREE_ID} = env;

/**
 * @param {FormProps} props Props.
 * @returns React element.
 */
export default function Form({onSubmit: onSuccessSubmit}: FormProps) {
  const [{status}, submit] = useFormspree<ContactFormData>(NEXT_PUBLIC_FORMSPREE_ID!);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onSubmit = async (values: ContactFormData) => {
    await submit(values);
    resetForm();
    onSuccessSubmit?.();
  };

  const formikData = useFormik<ContactFormData>({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const {handleSubmit, isSubmitting, isValid, dirty, resetForm} = formikData;

  return (
    <AppearInViewport transition={{delay: 1, duration: 1.5}}>
      <FormikContext.Provider value={formikData}>
        <form onSubmit={handleSubmit}>
          <FormField name="name" />
          <FormField name="message" />
          <div>Select your preferred method of contact.</div>
          <FormField name="email" />
          <FormField name="tel" />
          <FormField name="telegram" />
          <Button
            type="submit"
            disabled={isSubmitting || !isValid || !dirty}
          >
            Submit
          </Button>
          {status === 'error' && <div>Something went wrong. Please try again.</div>}
        </form>
      </FormikContext.Provider>
    </AppearInViewport>
  );
}
