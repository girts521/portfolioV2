// pages/_app.js
import '../src/app/globals.css';  // Import global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Cookie from 'js-cookie';
import { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }) {
const [cookieConsent, setCookieConsent] = useState(false);

const updateConsentStatus = () => {
  const cookie = Cookie.get('cookieConsent');
  if (cookie === 'accepted') {
    setCookieConsent(true);
  }  else {
    setCookieConsent(false);
  }
};

useEffect(() => {
  updateConsentStatus();  // Check consent status on initial load

  // Set up event listener for custom cookieConsentGiven event
  document.addEventListener('cookieConsentGiven', updateConsentStatus);

  // Clean up event listener on component unmount
  return () => {
    document.removeEventListener('cookieConsentGiven', updateConsentStatus);
  };
}, []);

  return (
    <div>
      <Head>
      <meta name="facebook-domain-verification" content="be54x6r04zocmph5alzp8qee4xoe04" />
      {cookieConsent && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '661675319110705');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=661675319110705&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )}
        </Head>
        <Navbar />

      <Component {...pageProps} /> 
      <Footer />
    </div>
  );
}

export default MyApp;
