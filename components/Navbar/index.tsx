"use client";
import styles from "./Navbar.module.scss";
import {useState, useEffect} from "react";
import Image from "next/image";
// @ts-ignore
import { Link } from 'react-scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0);

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
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
        }
    }

    return (
        <>
            <div
                className={styles.mobileMenu}
                onClick={() => {
                    onClickHandler();
                }}
            >
                <Image src="/Burger.png" alt="logo" width="100" height="100"/>
            </div>

            {isOpen && (
                <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.navBg}></div>
                    <h2>Girts Karcevskis</h2>
                    <ul>
                        <li className={styles.navItem}><Link onClick={() => {
                            onClickHandler();
                        }} to="homeSection" smooth={true}>Home</Link></li>
                        <li className={styles.navItem}><Link onClick={() => {
                            onClickHandler();
                        }} to="aboutSection" smooth={true}>About</Link></li>
                        <li  className={styles.navItem}><Link onClick={() => {
                            onClickHandler();
                        }} to="portfolioSection" smooth={true}>Portfolio</Link></li>
                        <li className={styles.navItem}><Link onClick={() => {
                            onClickHandler();
                        }} to="contactSection" smooth={true}>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}
