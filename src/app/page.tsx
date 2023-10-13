import Image from "next/image";
import styles from "./page.module.scss";

import HeroBanner from "../../components/HeroBanner";
import Services from "../../components/Services";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Thankyou from "../../components/Thankyou";
import ScrollFadeInUp from "../../components/ScrollFadeInUp";

export default function Home() {
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
      <Portfolio />
        <ScrollFadeInUp>
      <Thankyou />
        </ScrollFadeInUp>
    </main>
  );
}
