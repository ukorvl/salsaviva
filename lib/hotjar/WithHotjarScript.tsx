import Script from 'next/script';
import {env} from '@/app/env.mjs';

const {NODE_ENV, HOTJAR_ID, HOTJAR_SNIPPET_VERSION} = env;

/**
 * Hotjar script to embed in the head of the document.
 * @returns React component.
 */
export default function WithHotjarScript() {
  if (NODE_ENV === 'development') {
    return <></>;
  }

  if ([HOTJAR_ID, HOTJAR_SNIPPET_VERSION].some(v => v === undefined)) {
    return <></>;
  }

  return (
    <Script
      id="hotjar"
      strategy="lazyOnload"
    >
      {`
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SNIPPET_VERSION}};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
  );
}
