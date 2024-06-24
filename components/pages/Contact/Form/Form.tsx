'use client';

import {FormikContext, useFormik} from 'formik';
import {m} from 'framer-motion';
import Button from '@/components/shared/Button/Button';
import validationSchema, {ContactFormData} from './validationSchema';
import FormField from './FormField';

/**
 * Props.
 */
type FormProps = {
  onSubmit: (v: ContactFormData) => Promise<void>;
};

const initialValues = {
  name: '',
  message: '',
} satisfies ContactFormData;

/**
 * @param {FormProps} props Props.
 * @returns React element.
 */
export default function Form({onSubmit}: FormProps) {
  const mottoCn = 'text-center text-gray-300 mt-16';
  const btnCn = 'mt-8';

  const formikData = useFormik<ContactFormData>({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const {handleSubmit, isSubmitting, isValid, dirty} = formikData;

  return (
    <FormikContext.Provider value={formikData}>
      <m.form
        onSubmit={handleSubmit}
        transition={{delay: 1, staggerChildren: 0.2, delayChildren: 0.5}}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        <FormField name="name" />
        <FormField name="message" />
        <div className={mottoCn}>Select your preferred method of contact:</div>
        <FormField name="email" />
        <FormField name="tel" />
        <FormField name="telegram" />
        <Button
          type="submit"
          disabled={isSubmitting || !isValid || !dirty}
          className={btnCn}
        >
          Submit
        </Button>
      </m.form>
    </FormikContext.Provider>
  );
}
