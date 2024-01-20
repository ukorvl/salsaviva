import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

const notEmptyString = z.string().min(1);
const number = z
  .string()
  .refine(v => !Number.isNaN(Number(v)))
  .transform(Number);
const boolean = z
  .string()
  .refine(v => v === 'true' || v === 'false' || v === '')
  .transform(value => value === 'true');

const server = {};

const client = {
  NEXT_PUBLIC_GA_TRACKING_ID: notEmptyString,
  NEXT_PUBLIC_FORMSPREE_ID: notEmptyString,
  NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE: boolean,
  NEXT_PUBLIC_INSTAGRAM_ADDRESS: notEmptyString.url(),
  NEXT_PUBLIC_FACEBOOK_ADDRESS: notEmptyString.url(),
  NEXT_PUBLIC_WHATSAPP_ADDRESS: notEmptyString.url(),
  NEXT_PUBLIC_TELEGRAM_ADDRESS: notEmptyString.url(),
  NEXT_PUBLIC_CONTACT_EMAIL: notEmptyString.email(),
  NEXT_PUBLIC_CONTACT_PHONE: notEmptyString,
  NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK: notEmptyString.url(),
  NEXT_PUBLIC_LOCATION_ADDRESS_TEXT: notEmptyString,
  NEXT_PUBLIC_GA_TRACKING_ID: notEmptyString,
  NEXT_PUBLIC_HOTJAR_ID: notEmptyString,
  NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION: number,
  NEXT_PUBLIC_FORMSPREE_ID: notEmptyString,
};

const shared = {
  NODE_ENV: z.enum(['development', 'production']),
};

export const env = createEnv({
  server,
  client,
  shared,
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID,
    NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE: process.env.NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE,
    NEXT_PUBLIC_INSTAGRAM_ADDRESS: process.env.NEXT_PUBLIC_INSTAGRAM_ADDRESS,
    NEXT_PUBLIC_FACEBOOK_ADDRESS: process.env.NEXT_PUBLIC_FACEBOOK_ADDRESS,
    NEXT_PUBLIC_WHATSAPP_ADDRESS: process.env.NEXT_PUBLIC_WHATSAPP_ADDRESS,
    NEXT_PUBLIC_TELEGRAM_ADDRESS: process.env.NEXT_PUBLIC_TELEGRAM_ADDRESS,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK: process.env.NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK,
    NEXT_PUBLIC_LOCATION_ADDRESS_TEXT: process.env.NEXT_PUBLIC_LOCATION_ADDRESS_TEXT,
    NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION: process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
    NEXT_PUBLIC_HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
  },
});
