import Image from "next/image";
import styles from "./page.module.scss";

import HeroBanner from "../../components/HeroBanner";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Thankyou from "../../components/Thankyou";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner />
      <About />
      <Portfolio />
      <Thankyou />
    </main>
  );
}
