import abattage from "../../assets/abattage.png";
import deboisement from "../../assets/deboisement.png";
import elagage from "../../assets/elegage.png";
import essouchage from "../../assets/essouchage.png";
import haubanage from "../../assets/haubanage.png";
import tailleDeHaie from "../../assets/tailleDeHaie.png";
import { useTranslation } from "react-i18next";
import styles from "./services.module.css";
import {Link} from "react-router-dom"

export default function services(){
    const {t, i18n } = useTranslation();

    return(
        <div className={styles.servicesContainer}>
            <h1 className={styles.title}>Services</h1>

            <div className={styles.individualServices}>
                <img src={abattage} alt="abattage picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.abattage")}</h2>
                <p className={styles.servicesDes}>{t("service.desAba")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                 <img src={deboisement} alt="deboisement picture" className={styles.servicesPic}/>
                 <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.deboisement")}</h2>
                <p className={styles.servicesDes}>{t("service.desDeb")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                 <img src={elagage} alt="elagage picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.elagage")}</h2>
                <p className={styles.servicesDes}>{t("service.desEl")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                 <img src={essouchage} alt="essouchage picture" className={styles.servicesPic}/>
                 <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.essouchage")}</h2>
                <p className={styles.servicesDes}>{t("service.desEss")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                 <img src={haubanage} alt="haubanage picture" className={styles.servicesPic}/>
                 <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.haubanage")}</h2>
                <p className={styles.servicesDes}>{t("service.desHaub")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                 <img src={tailleDeHaie} alt="taille de haie picture" className={styles.servicesPic}/>
                 <div className={styles.serviceOverlay}>
                <h2 className={styles.servicesTitle}>{t("service.taille")}</h2>
                <p className={styles.servicesDes}>{t("service.desTaille")}</p>
                </div>
            </div>
            {/* <Link to="/submission" className={styles.quotesButton}>{t('services.estimate')}</Link>  */}
            <div>
            <Link to="/submission">
            <button className={styles.linkToSub}>
                {t("service.estimate")}
            </button>
            </Link>
            </div>
        </div>
    )


}