"use client";
import styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";

import Project from "../Project";
import Placeholder from "../Placeholder";

export default function Portfolio() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <main className={styles.portfolioContainer}>
      <h2>Portfolio</h2>
      <div className={styles.projects}>
        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div ref={inViewRef}>
          {inView ? (
            <Project
              title="Project 1"
              codeUrl="/"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus eligendi rerum qui repellat numquam, commodi pariatur? Illum ea blanditiis deserunt fuga facilis unde numquam aspernatur accusamus accusantium! Saepe, ad.
Architecto provident iusto doloribus neque corporis illum alias maiores sequi facilis dolore quis praesentium libero officiis suscipit maxime, similique nam qui. Ex dolorum nam porro consequuntur, labore aliquam ut quidem.
Beatae velit quaerat culpa iusto sapiente ut eligendi odio enim earum quam! Explicabo optio animi consectetur dolorum eaque itaque dolorem molestias nisi, odit autem perspiciatis nostrum, mollitia deserunt. Ducimus, expedita!"
            />
          ) : (
            <Placeholder />
          )}
        </div>
      </div>
    </main>
  );
}
