import styles from "./index.module.scss";

interface ServiceProps {
    title: string;
    description: string;
    list?: string[];
    image?: string;
}

export default function Service({ title, description, list, image }: ServiceProps) {
  return (
    <div className={styles.service}>
    <h2>{title}</h2>
    <img className={styles.icon} src={image} alt="" />
    <div className={styles.description}>
      <p>
        {description}
      </p>
      <ul>
        {list?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </div>

  )
}