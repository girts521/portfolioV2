"use client";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (width > 768) {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      <div
        className={styles.mobileMenu}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Image src="/burger.svg" alt="logo" width="100" height="100" />
      </div>

      {isOpen && (
        <nav className={styles.navbar}>
          <h2>Girts Karcevskis</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      )}
    </>
  );
}
