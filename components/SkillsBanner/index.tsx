"use client";
import { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function SkillsBanner() {

  const skillImages = [
    { src: "/images/skills/html.svg", alt: "HTML" },
    { src: "/images/skills/sass.svg", alt: "CSS" },
    { src: "/images/skills/js.svg", alt: "JavaScript" },
    { src: "/images/skills/react.svg", alt: "React" },
    { src: "/images/skills/magento.svg", alt: "Magento" },
    { src: "/images/skills/php.svg", alt: "PHP" },
    { src: "/images/skills/mysql.svg", alt: "MySQL" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.skillsBanner}>
        {skillImages.map((image) => (

          <div key={image.alt} className={styles.skill}>
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      <div className={styles.skillsBannertwo}>
        {skillImages.map((image) => (

          <div key={image.alt} className={styles.skill}>
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
