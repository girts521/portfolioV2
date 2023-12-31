"use client";
import styles from "./styles.module.scss";
import Lottie from "react-lottie-player";
import WaveAnimationData from "../../public/wave6.json";

export default function Thankyou() {
  return (
    <div id="contactSection" className={styles.thankyou}>
      <h2>Thank you for visiting!</h2>
      <p>
        Thank you for taking the time and visit my portfolio page. I hope you
        enjoyed it and I am looking forward to hearing from you! I am currently
        looking for a job as a Web Developer. If you are interested in working
        with me, please contact me via email or LinkedIn.
      </p>
      <p>
        My email address is:{" "}
        <a href="mailto:girts@gkarcevskis.com" target="_blank">girts@gkarcevskis.com</a>
        <br />
        Check out my LinkedIn profile:{" "}
        <a href="https://www.linkedin.com/in/girts-karcevskis-79302890/" target="_blank">
          https://www.linkedin.com/in/girts-karcevskis-79302890/
        </a>
      </p>
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
