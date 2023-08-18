import Image from "next/image";
import styles from "./styles.module.scss";

import SkillsBanner from "../SkillsBanner";

export default function HeroBanner() {
  return (
      <div className={styles.heroBanner}>
        <div className={styles.description}>
          <div className={styles.left}>
            <h1>Full-stack Developer</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident reprehenderit dolorum minima ad ipsa
              doloremque dolorem blanditiis dolore quis beatae aliquid
              reiciendis natus neque, odio, necessitatibus quae magnam soluta.
            </span>
          </div>
          <div className={styles.image}>
            <Image src="/images/hero.jpg" alt="hero" width={400} height={500} />
          </div>
        </div>
        <SkillsBanner />
      </div>
  );
}
