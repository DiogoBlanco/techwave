import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <Link href={'/'} className={styles.navbar_link}>
          <li className={styles.navbar_li}>Home</li>
        </Link>
        <Link href={'/'} className={styles.navbar_link}>
          <li className={styles.navbar_li}>Sobre</li>
        </Link>
        <Link href={'/'} className={styles.navbar_link}>
          <li className={styles.navbar_li}>Soluções</li>
        </Link>
        <Link href={'/'} className={styles.navbar_link}>
          <li className={styles.navbar_li}>Contato</li>
        </Link>
      </ul>
    </nav>
  );
}
