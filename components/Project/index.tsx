"use client"
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ProjectProps {
    title: string;
    description: string;
    codeUrl: string;
    img?: string;
    url?: string;
    reverse?: boolean;
  }

export default function Project({ title, description, codeUrl, img = "/ProjectImage.png", url, reverse }: ProjectProps) {
const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = (e:any ) => {
        console.log(e.target.parentNode);
        setIsOpen(!isOpen);
        e.target.parentNode.children[1].classList.toggle(styles.truncate);
    }
  return (
    <>
      <div className={`${styles.project} ${reverse ? styles.reverse : ''}`}>
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
        />
        <div className={styles.projectDescription}>
          <h3>{title}</h3>
          <p className={styles.truncate} >
            {description}
          </p>
            <span onClick={onClickHandler}>{isOpen ? "Show less" : "Read more" }</span>
          <div className={styles.actions}>
            <button><a href={url}>View Project</a></button>
            <button><a href={codeUrl}>View Code</a></button>
          </div>
        </div>
      </div>
    </>
  );
}
// "/images/placeholder.webp"