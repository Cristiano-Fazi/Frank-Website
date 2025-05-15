import React from "react"
import styles from './Footer.module.css';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/*Left Column*/}
            <div className={styles.footer_contact}>
                <div className={styles.contact_item}>
                    <FaPhone className={styles.contact_icon}/>
                    <span>514-651-7659</span>
                </div>
                <div className={styles.contact_item}>
                    <FaEnvelope className={styles.contact_icon}/>
                    <a href="mailto:selagagefrancois@gmail.com"
                    className={styles.contact_link}>
                        selagagefrancois@gmail.com
                    </a>
                </div>
                <div className={styles.contact_item}>
                    <FaFacebookF className={styles.contact_icon}/>
                    <a href="https://www.facebook.com/profile.php?id=100006892575157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contact_link}>
                    François Catellier</a>
                </div>
            </div>

            {/*Center Column*/}
            <div className={styles.footer_logo}>
                <img
                src="../../src/assets/Logo-no-background.png"
                alt="Service d'élagage François Logo"
                className={styles.footer_logo_image}>
                </img>
                <p className={styles.footer_logo_subtitle}>
                    Service d’urgence 24h/7
                </p>
            </div>

            {/* Right Column */}
            <div className={styles.footer_services}>
                <h3 className={styles.services_title}>Services</h3>
                <ul className={styles.services_list}>
                    <li>Abattage</li>
                    <li>Déboisement</li>
                    <li>Essouchement</li>
                    <li>Haubanage</li>
                    <li>Taille de haie</li>
                    <li>Élague</li>
                </ul>
            </div>
        </footer>
    )
}