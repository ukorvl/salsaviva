'use client';

import {FormikContext, useFormik} from 'formik';
import Button from '@/components/shared/Button/Button';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import useFormspree from '@/lib/formspree/useFormspree';
import validationSchema, {ContactFormData} from './validationSchema';
import FormField from './FormField';

const initialValues = {
  name: '',
  message: '',
} satisfies ContactFormData;

const {NEXT_PUBLIC_FORMSPREE_ID} = process.env;

/**
 * @returns React element.
 */
export default function Form() {
  const [{status}, submit] = useFormspree<ContactFormData>(NEXT_PUBLIC_FORMSPREE_ID!);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const onSubmit = async (values: ContactFormData) => {
    await submit(values);
  };

  const formikData = useFormik<ContactFormData>({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const {handleSubmit, isSubmitting, isValid, dirty} = formikData;

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
