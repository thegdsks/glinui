'use client';

import Script from 'next/script';

export function WebAnalytics() {
  return (
    <>
      <Script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-LHBW4DNL1C"
      ></Script>
      <Script id="gtag">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LHBW4DNL1C');
`}
      </Script>
    </>
  );
}
