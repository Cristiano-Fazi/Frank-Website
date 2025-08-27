import homeImg from "../../assets/Frank-front.png";
import styles from "./HomeTop.module.css";

export default function HomeTop() {
  return (
    <div className={styles.homePage_container}>
      <img src={homeImg} alt="tree picture" className={styles.homeMain_img} />

      <div className={styles.homeMain_text}>
        <h1>Arborist Certified and Passionate</h1>
                <p className={styles.service_urgence}>Urgent Service available 24h/7</p>
        <p className={styles.phone_number}>514-651-7659</p>
      </div>
    </div>
  );
}
