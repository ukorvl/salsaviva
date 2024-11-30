'use client';

import {FormikContext, useFormik} from 'formik';
import {m} from 'framer-motion';
import clsx from 'clsx';
import Button from '@/components/shared/Button/Button';
import validationSchema, {ContactFormData} from './validationSchema';
import FormField from './FormField';
import variants from './formElementChildrenVariants';

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
  const formCn = clsx('flex', 'flex-col', 'justify-center');
  const mottoCn = 'text-center text-gray-300 mt-16';
  const btnCn = clsx('mt-8', 'lg:mx-0', 'mx-auto', 'w-64', 'lg:w-1/2');

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
        className={formCn}
      >
        <FormField name="name" />
        <FormField name="message" />
        <m.div
          className={mottoCn}
          variants={variants}
        >
          Select your preferred method of contact:
        </m.div>
        <FormField name="email" />
        <FormField name="tel" />
        <FormField name="telegram" />
        <m.div variants={variants}>
          <Button
            type="submit"
            disabled={isSubmitting || !isValid || !dirty}
            className={btnCn}
          >
            Submit
          </Button>
        </m.div>
      </m.form>
    </FormikContext.Provider>
  );
}
