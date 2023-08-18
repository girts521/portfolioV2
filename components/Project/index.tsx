import styles from "./styles.module.scss";
import Image from "next/image";

interface ProjectProps {
    title: string;
    description: string;
    codeUrl: string;
    img?: string;
    url?: string;
  }

export default function Project({ title, description, codeUrl, img = "/images/placeholder.jpg", url }: ProjectProps) {
  return (
    <>
      <div className={styles.project}>
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
        />
        <div className={styles.projectDescription}>
          <h2>{title}</h2>
          <p>
            {description}
          </p>
          <div className={styles.actions}>
            <button><a href={url}>View Project</a></button>
            <button><a href={codeUrl}>View Code</a></button>
          </div>
        </div>
      </div>
    </>
  );
}
