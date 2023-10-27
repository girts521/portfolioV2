"use client";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

import styles from "./index.module.scss";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
    document.dispatchEvent(new Event('cookieConsentGiven'));
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
    document.dispatchEvent(new Event('cookieConsentGiven'));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.innerContainer}>
        <p>
          By clicking Accept, you consent to the use of cookies. You can learn more about how we use cookies by visiting our <a href="/policy">Privacy Policy</a>.
          <br />
          </p>
        
        <div className={styles.action}>
          <button className={styles.accept} onClick={handleAccept}>Accept</button>
          <button className={styles.reject} onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
