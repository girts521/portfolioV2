"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import Lottie from 'react-lottie-player'

import CircleAnimationData from '../../public/circle.json';
import WaveAnimationData from '../../public/wave6.json';


import SkillsBanner from "../SkillsBanner";

export default function HeroBanner() {
    return (
      <div id="homeSection" className={styles.heroBanner}>
        <div className={styles.description}>
          <div className={styles.left}>
            <h1>Full-stack Developer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident reprehenderit dolorum minima ad ipsa
              doloremque dolorem blanditiis dolore quis beatae aliquid
              reiciendis natus neque, odio, necessitatibus quae magnam soluta.
            </p>
          </div>
          <div className={styles.image}>
              <Lottie
                  play
                  loop
                  animationData={CircleAnimationData}
                  style={{ height: '600px', width: '550px' }}
                  className={styles.lottie}
              />
            <Image src="/images/hero.webp" alt="hero" width={416} height={500} />
          </div>
        </div>
        <SkillsBanner />
          <Lottie
              play
              loop
              animationData={WaveAnimationData}
              style={{ height: '600px', width: '100%' }}
              className={styles.lottieWave}
          />
      </div>
  );
}
