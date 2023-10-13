import styles from "./styles.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div id="aboutSection" className={styles.aboutContainer}>
      <h1>About Me</h1>

      <div className={styles.aboutDescription}>
      <Image
        src="/Photo2.png"
        alt="hero"
        width={1000}
        height={1200}
        quality={100}
      />
        <p>
          I'm originally from Latvia, a charming little country in Eastern
          Europe. Straight after high school, I left home to explore new
          cultures, study, and work in different countries - England, Germany,
          the Netherlands, and China. It's been a journey full of learning and
          growth.During my travels, I found myself drawn to programming. It
          started with writing batch scripts to solve problems that didn't have
          off-the-shelf solutions. The more I researched and tinkered, the more
          I fell in love with coding.To build on my interest, I took "The Web
          Developer Bootcamp" on Udemy. This course introduced me to HTML, CSS,
          JS, NodeJS, Express, and MongoDB. But I didn't stop there. I continued
          to learn about Linux, ElectronJs, Python, Docker, and even AWS through
          different courses.I realized that web development was the area I
          wanted to focus on. So, I took an online bootcamp back in Latvia to
          learn more about JS, React, and TypeScript. I'm also currently
          studying Algorithms and Data Structures.In recent years, I've
          dedicated a significant amount of my free time to learning about
          different technologies. This investment in my skills led to a
          rewarding opportunity as a web developer. Now, as I continue to grow
          in this role, I'm excited to take on new challenges and seize fresh
          opportunities in the tech industry.
        </p>
      </div>
    </div>
  );
}
