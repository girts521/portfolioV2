"use client";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
// @ts-ignore
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
//   const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    if (width >= 1024) {
      setIsOpen(true);
    }
    if (width < 1024) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const onClickHandler = () => {
    if (width < 1024) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      }
    }
  };

  return (
    <>
      <div
        className={styles.mobileMenu}
        onClick={() => {
          onClickHandler();
        }}
      >
        <Image src="/Burger.png" alt="logo" width="100" height="100" />
      </div>

      {isOpen && (
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
          <div className={styles.navBg}></div>
          <h2>Girts Karcevskis</h2>
          <ul>
            <li className={styles.navItem}>
              {" "}
              <Link onClick={onClickHandler} href={{ pathname: "/", query: { section: "homeSection" } }}>
               Home
              </Link>
            </li>
            <li className={styles.navItem}>
            <Link onClick={onClickHandler} href={{ pathname: "/", query: { section: "aboutSection" } }}>
               About
              </Link>
            </li>
            <li className={styles.navItem}>
            <Link onClick={onClickHandler} href={{ pathname: "/", query: { section: "portfolioSection" } }}>
                Portfolio
              </Link>
            </li>
            <li className={styles.navItem}>
            <Link onClick={onClickHandler} href={{ pathname: "/", query: { section: "contactSection" } }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
