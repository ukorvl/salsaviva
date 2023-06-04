import {ReactElement} from 'react';
import Script from 'next/script';
import * as gtag from './gtag';

/**
 * Injects Gtag script. Supposed to use in root layout.
 * Credits {@link https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app}.
 * @returns Layout.
 */
const WithGtag = (): ReactElement => {
  if (gtag.disableInDevMode && process.env.NODE_ENV !== 'production') {
    return <></>;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
      >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtag.GA_TRACKING_ID}`}
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}
          title="Noscript gtag"
        />
      </noscript>
    </>
  );
};

export default WithGtag;
