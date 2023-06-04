export const disableInDevMode = process.env.NEXT_PUBLIC_DISABLE_GA_IN_DEV_MODE;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

if (!disableInDevMode && !GA_TRACKING_ID) {
  throw new Error('NEXT_PUBLIC_GA_TRACKING_ID environment variable should be set.');
}

/**
 * @param url Url.
 */
export const pageview = (url: string) => {
  if (disableInDevMode) {
    return;
  }

  window.gtag('config', GA_TRACKING_ID!, {
    page_path: url,
  });
};

/**
 * @param event Event.
 * @param params Params.
 */
export const event = (
  event: Gtag.EventNames,
  params: Pick<Gtag.EventParams, 'event_category' | 'event_label' | 'value'>,
) => {
  if (disableInDevMode) {
    return;
  }

  window.gtag('event', event, params);
};
