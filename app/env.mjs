import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

/**
 * Checks if a string is not empty.
 */
const notEmptyString = z.string().min(1);
/**
 * Checks if a value is a number.
 */
const number = notEmptyString
  .refine(v => {
    return !isNaN(Number(v)) || !isNaN(Number(v.replace(/"'/g, '')));
  })
  .transform(Number);
/**
 * Checks if a value is a boolean.
 */
const boolean = z
  .string()
  .refine(v => v === 'true' || v === 'false' || v === '')
  .transform(value => value === 'true');

const server = {
  INSTAGRAM_ADDRESS: notEmptyString.url(),
  FACEBOOK_ADDRESS: notEmptyString.url(),
  WHATSAPP_ADDRESS: notEmptyString.url(),
  TELEGRAM_ADDRESS: notEmptyString.url(),
  DISABLE_GA_IN_DEV_MODE: boolean,
  GA_TRACKING_ID: notEmptyString,
  HOTJAR_ID: notEmptyString,
  HOTJAR_SNIPPET_VERSION: number,
  FORMSPREE_ID: notEmptyString,
  CONTACT_EMAIL: notEmptyString.email(),
  CONTACT_PHONE: notEmptyString,
  LOCATION_GOOGLE_MAPS_LINK: notEmptyString.url(),
  LOCATION_ADDRESS_TEXT: notEmptyString,
  BASE_PATH: z.string().optional(),
  ORIGIN: notEmptyString.url(),
};

const client = {};

const shared = {
  NODE_ENV: z.enum(['development', 'production']),
};

export const env = createEnv({
  server,
  client,
  shared,
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    INSTAGRAM_ADDRESS: process.env.INSTAGRAM_ADDRESS,
    FACEBOOK_ADDRESS: process.env.FACEBOOK_ADDRESS,
    WHATSAPP_ADDRESS: process.env.WHATSAPP_ADDRESS,
    TELEGRAM_ADDRESS: process.env.TELEGRAM_ADDRESS,
    DISABLE_GA_IN_DEV_MODE: process.env.DISABLE_GA_IN_DEV_MODE,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    HOTJAR_ID: process.env.HOTJAR_ID,
    HOTJAR_SNIPPET_VERSION: process.env.HOTJAR_SNIPPET_VERSION,
    FORMSPREE_ID: process.env.FORMSPREE_ID,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_PHONE: process.env.CONTACT_PHONE,
    LOCATION_GOOGLE_MAPS_LINK: process.env.LOCATION_GOOGLE_MAPS_LINK,
    LOCATION_ADDRESS_TEXT: process.env.LOCATION_ADDRESS_TEXT,
    BASE_PATH: process.env.BASE_PATH,
    ORIGIN: process.env.ORIGIN,
  },
});
