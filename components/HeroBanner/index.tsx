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
            <h1>Full-stack Web Developer</h1>
            <h2>
            Magento 2 and React Developer Actively Enhancing the E-commerce Landscape
            </h2>
      </div>
  );
}
