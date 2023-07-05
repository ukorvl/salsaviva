const envNames = [
  'CONTACT_PHONE',
  'WHATSAPP_ADDRESS',
  'FACEBOOK_ADDRESS',
  'INSTAGRAM_ADDRESS',
  'TELEGRAM_ADDRESS',
  'CONTACT_EMAIL',
  'NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE',
  'NEXT_PUBLIC_GA_TRACKING_ID',
  'LOCATION_GOOGLE_MAPS_LINK',
  'LOCATION_ADDRESS_TEXT',
] as const;

/**
 * Any item in {@link envNames}.
 */
type EnvName = (typeof envNames)[number];

/**
 * @param environmentVariable Env to read.
 * @returns Env or throws.
 * @throws If env is not set.
 */
const getEnvironmentVariable = (environmentVariable: EnvName): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];

  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

/**
 * Config to access env safly.
 */
const envConfig = envNames.reduce((obj, item) => {
  return {
    ...obj,
    [item]: getEnvironmentVariable(item),
  };
}, {} as Record<EnvName, string>);

export default envConfig;
