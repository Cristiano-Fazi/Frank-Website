
import { useTranslation } from "react-i18next";
import styles from "./services.module.css";
import { Link } from "react-router-dom"

import prunning from "../../assets/prunning.jpg"
import cabling from "../../assets/cabling.jpg"
import hedging from "../../assets/hedging.jpg"
import stumpRemoval from "../../assets/stumpRemoval.png"
import felling from "../../assets/felling.jpg"
import clearing from "../../assets/Clearing.jpg"

export default function services(){
    const {t, i18n } = useTranslation();

    return(
        <div className={styles.servicesContainer}>
            <h1 className={styles.title}>Services</h1>

            <div className={styles.individualServices}>
                <img src={felling} alt="felling picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.abattage")}</h2>
                    <p className={styles.servicesDes}>{t("service.desAba")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                <img src={clearing} alt="clearing" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.deboisement")}</h2>
                    <p className={styles.servicesDes}>{t("service.desDeb")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                <img src={prunning} alt="prunning picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.elagage")}</h2>
                    <p className={styles.servicesDes}>{t("service.desEl")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                <img src={stumpRemoval} alt="stump removal picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.essouchage")}</h2>
                    <p className={styles.servicesDes}>{t("service.desEss")}</p>
                </div>
            </div>
            <div className={styles.individualServices}> 
                <img src={cabling} alt="cabling picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.haubanage")}</h2>
                    <p className={styles.servicesDes}>{t("service.desHaub")}</p>
                </div>
            </div>
            <div className={styles.individualServices}>
                <img src={hedging} alt="hedging picture" className={styles.servicesPic}/>
                <div className={styles.serviceOverlay}>
                    <h2 className={styles.servicesTitle}>{t("service.taille")}</h2>
                    <p className={styles.servicesDes}>{t("service.desTaille")}</p>
                </div>
            </div>
            
            <div>
                <Link to="/submission">
                    <button className={styles.linkToSub}> {t("service.estimate")} </button>
                </Link>
            </div>
        </div>
    )


}