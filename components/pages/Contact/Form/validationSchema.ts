import {z} from 'zod';
import {toFormikValidationSchema} from 'zod-formik-adapter';

const requiredFields = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Too Long!'),
  message: z.string().max(500, 'Too Long!'),
});

const optionalFields = z
  .object({
    email: z.string().email('Invalid email address').max(50, 'Too Long!'),
    telegram: z.string().startsWith('@', 'Invalid telegram nickname').max(50, 'Too Long!'),
    tel: z.string().max(50, 'Too Long!'),
  })
  .partial()
  .refine(({email, telegram, tel}) => email || telegram || tel, {
    message: 'Either email, phone number or telegram is required',
    path: ['email', 'telegram', 'tel'],
  });

const validationSchema = requiredFields.and(optionalFields);

/**
 * Type for the form data.
 */
export type ContactFormData = z.infer<typeof validationSchema>;

export default toFormikValidationSchema(validationSchema);
