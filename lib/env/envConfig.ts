/**
 * @param environmentVariable Env to read.
 * @returns Env or throws.
 * @throws If env is not set.
 */
const getEnvironmentVariable = (environmentVariable: string): string => {
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
const envConfig = {
  CONTACT_PHONE: getEnvironmentVariable('CONTACT_PHONE'),
  WHATSAPP_ADDRESS: getEnvironmentVariable('WHATSAPP_ADDRESS'),
  FACEBOOK_ADDRESS: getEnvironmentVariable('FACEBOOK_ADDRESS'),
  INSTAGRAM_ADDRESS: getEnvironmentVariable('INSTAGRAM_ADDRESS'),
  TELEGRAM_ADDRESS: getEnvironmentVariable('TELEGRAM_ADDRESS'),
  CONTACT_EMAIL: getEnvironmentVariable('CONTACT_EMAIL'),
  NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE: getEnvironmentVariable('NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE'),
  NEXT_PUBLIC_GA_TRACKING_ID: getEnvironmentVariable('NEXT_PUBLIC_GA_TRACKING_ID'),
};

export default envConfig;
