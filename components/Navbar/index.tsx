import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
        <h2>Girts Karcevskis</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
        </nav>
    )
}

