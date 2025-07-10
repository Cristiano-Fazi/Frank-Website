import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Left: Hamburger + Logo */}
      <div className={styles.leftSection}>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.logoContainer}>
          <img
            src="../../src/assets/Logo-no-background.png"
            alt="Company Logo"
            className={styles.logo}
          />
        </div>
      </div>

      {/* Center: Nav Items */}
      <div
        className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}
      >
        <button className={styles.navItem}>À Propos</button>
        <button className={styles.navItem}>Nos Services</button>
        <button className={styles.navItem}>Notre Équipe</button>
      </div>

      {/* Right: Quote + Language */}
      <div className={styles.rightSection}>
        <button className={styles.quoteButton}>Request a Free Quote</button>
        <span className={styles.languageToggle}>Fr</span>
      </div>
    </nav>
  );
}
