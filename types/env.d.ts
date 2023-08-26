const envNames = [
  'NEXT_PUBLIC_CONTACT_PHONE',
  'NEXT_PUBLIC_WHATSAPP_ADDRESS',
  'NEXT_PUBLIC_FACEBOOK_ADDRESS',
  'NEXT_PUBLIC_INSTAGRAM_ADDRESS',
  'NEXT_PUBLIC_TELEGRAM_ADDRESS',
  'NEXT_PUBLIC_CONTACT_EMAIL',
  'NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE',
  'NEXT_PUBLIC_GA_TRACKING_ID',
  'NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK',
  'NEXT_PUBLIC_LOCATION_ADDRESS_TEXT',
  'NEXT_PUBLIC_HOTJAR_ID',
  'NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION',
] as const;

/**
 * Any item in {@link envNames}.
 */
type EnvName = (typeof envNames)[number];

namespace NodeJS {
  // eslint-disable-next-line jsdoc/require-jsdoc
  interface ProcessEnv extends Record<EnvName, string | undefined> {}
}
