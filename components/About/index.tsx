import styles from "./styles.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div id="aboutSection" className={styles.aboutContainer}>
      <Image src="/images/placeholder.webp" alt="hero" width={600} height={400} />
      <div className={styles.aboutDescription}>
        <h1>About Me</h1>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt laborum deserunt sit
          quia autem. Nisi, blanditiis, saepe error repudiandae expedita placeat
          necessitatibus nemo porro veritatis consequatur eos est, fugiat
          obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Numquam laboriosam esse expedita natus enim atque harum laudantium
          molestias? Ea consequuntur expedita officiis nostrum, sapiente sequi
          et aliquam repellat molestiae laborum!
        </p>
      </div>
    </div>
  );
}
