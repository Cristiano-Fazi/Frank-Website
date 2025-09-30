import styles from './Footer.module.css';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import logoNoBackground from '/Logo-no-background.png'
import insuranceLogoTwoNoBackground from '/Insurance-logo-2-no-background.png'
import SIAQLogo from '/SIAQ-logo-no-background.png'
import ISALogo from '/ISA-logo-no-background.png'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.lower_footer}>
                {/*Left Column*/}
                <div className={styles.footer_contact}>
                    <div className={styles.contact_item}>
                        <FaPhone className={styles.contact_icon}/>
                        <a href="tel+15146517659" 
                        className={styles.contact_link}>
                            514-651-7659
                        </a>
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
                        <a href="https://www.facebook.com/profile.php?id=100076406837580"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contact_link}>
                        François Catellier</a>
                    </div>
                </div>

                {/*Center Column*/}
                <div className={styles.footer_logo}>
                    <img
                    src={logoNoBackground}
                    alt="Service d'élagage François Logo"
                    className={styles.footer_logo_image}>
                    </img>
                    <p className={styles.footer_logo_subtitle}>
                        {t('footer.emergency')}
                    </p>
                </div>

                {/* Right Column */}
                <div className={styles.footer_services}>
                    <div className={styles.footer_services_content}>
                        <h3 className={styles.services_title}>Services</h3>
                        <ul className={styles.services_list}>
                            <li>{t('footer.felling')}</li>
                            <li>{t('footer.clearing')}</li>
                            <li>{t('footer.removal')}</li>
                            <li>{t('footer.cabling')}</li>
                            <li>{t('footer.trimming')}</li>
                            <li>{t('footer.pruning')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.upper_footer}>
                <div className={styles.upper_footer_item}>
                    <img className={styles.upper_footer_image_type_1}
                    src={insuranceLogoTwoNoBackground} alt="Insurance Logo"/>
                    <div>
                        {t('footer.insurance')}
                    </div>
                </div>
                <div className={styles.upper_footer_item}>
                    <img className={styles.upper_footer_image_type_2}
                    src={SIAQLogo} alt="SIAQ Logo"/>
                    <div>
                        {t('footer.SIAQ')}
                    </div>
                </div>
                <div className={styles.upper_footer_item}>
                    <img className={styles.upper_footer_image_type_1}
                    src={ISALogo} alt="ISA Logo"/>
                    <div>
                        {t('footer.champion')}
                    </div>
                </div>
            </div>
        </footer>
    )
}