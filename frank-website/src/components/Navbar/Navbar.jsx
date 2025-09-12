import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logoNoBackground from '/Logo-no-background.png'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

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
        {/* <button className={styles.navItem}>{t('navbar.about')}</button>
        Link is blue for about us
        and the underlining is different from the other buttons */}
        <HashLink smooth to="/about#top" className={styles.navItem}>{t('navbar.about')}</HashLink>
        <HashLink smooth to="/about#services" className={styles.navItem}>{t('navbar.services')}</HashLink>
        <HashLink smooth to="/about#team" className={styles.navItem}>{t('navbar.team')}</HashLink>
        
      </div>

      {/* Right: Quote + Language */}
      <div className={styles.rightSection}>
        <Link to="/submission" className={styles.quoteButton}>{t('navbar.quote')}</Link>
        <span className={styles.languageToggle} onClick={toggleLanguage}>
          {i18n.language === "en" ? "FR" : "EN"}
        </span>
      </div>
    </nav>
  );
}
