import { useState } from 'react';
import styles from './Navbar.module.css';
import logoNoBackground from '/Logo-no-background.png'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(next);
  }

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
          <img src={logoNoBackground} alt="Company Logo" className={styles.logo}/>
        </div>
      </div>

      {/* Center: Nav Items */}
      <div
        className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}
      >
        <button className={styles.navItem}>{t('navbar.about')}</button>
        <button className={styles.navItem}>{t('navbar.services')}</button>
        <button className={styles.navItem}>{t('navbar.team')}</button>
      </div>

      {/* Right: Quote + Language */}
      <div className={styles.rightSection}>
        <button className={styles.quoteButton}>{t('navbar.quote')}</button>
        <span className={styles.languageToggle} onClick={toggleLanguage}>
          {i18n.language === "en" ? "FR" : "EN"}
        </span>
      </div>
    </nav>
  );
}
