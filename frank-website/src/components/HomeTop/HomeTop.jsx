import { useTranslation } from "react-i18next";
import homeImg from "../../assets/Frank-front.png";
import styles from "./HomeTop.module.css";

export default function HomeTop() {
    const {t, i18n } = useTranslation();
  return (
    <div className={styles.homePage_container}>
      <img src={homeImg} alt="tree picture" className={styles.homeMain_img} />

      <div className={styles.homeMain_text}>
        <h1>{t("about.title")}</h1>
                <p className={styles.service_urgence}>{t("about.urgent")}</p>
        <p className={styles.phone_number}>514-651-7659</p>
      </div>
    </div>
  );
}
