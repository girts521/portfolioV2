"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ScrollFadeInUpProps {
    children: ReactNode;
}

const ScrollFadeInUp: React.FC<ScrollFadeInUpProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    ref.current.classList.add(styles.visible);
                }
            },
            { threshold: 0.1 } // Adjust this value for when the animation triggers
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className={`${styles.fadeInUp}`} ref={ref}>
            {children}
        </div>
    );
};

export default ScrollFadeInUp;
