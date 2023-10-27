// import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Thankyou from "../components/Thankyou";
import ScrollFadeInUp from "../components/ScrollFadeInUp";


import CookieConsentBanner from "../components/CookieConsentBanner";

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    const { section } = router.query;
    if (section) {
      scroller.scrollTo(section as string, {
        duration: 900,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [router.query]);

  return (
    <main className={styles.main}>
        <ScrollFadeInUp>
      <HeroBanner />
        </ScrollFadeInUp>
        <ScrollFadeInUp>
      <Services />
        </ScrollFadeInUp>
        <ScrollFadeInUp>
        <About />
        </ScrollFadeInUp>
      {/* <Portfolio /> */}
        <ScrollFadeInUp>
      <Thankyou />
        </ScrollFadeInUp>

        <CookieConsentBanner />
    </main>
  );
}
