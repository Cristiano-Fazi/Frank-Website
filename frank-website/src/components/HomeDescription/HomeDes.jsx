
import us from "../../assets/us.jpg"
import styles from "./HomeDes.module.css";
import { useTranslation } from "react-i18next";

export default function homeDes(){
    const {t, i18n } = useTranslation();
    
    return(
        <div className={styles.homeDescription}>
           <h1 className={styles.homeDes_title}>{t("about.desTitle")}</h1>

           <div className={styles.homeDes_content}>
           <p className={styles.homeDes_text}>Chez Service d'Élagage François, nous prenons soin de vos arbres comme si c'étaient les nôtres. 🌳Notre expertise en élagage, abattage et entretien
             des arbres est guidée par un seul objectif : assurer leur santé et leur bien-être. Forts de nombreuses années d'expérience, nos arboristes certifiés utilisent des techniques 
             respectueuses et adaptées à chaque situation. Nous croyons qu'un arbre bien soigné est un arbre en pleine forme, et c'est pourquoi nous offrons des solutions sur mesure, en prenant 
             toujours en compte les besoins spécifiques de vos arbres. Change this text to the correct english version once Frank sends it to us.</p>

            <img src={us} alt="who are we" className={styles.des_tree} />

            </div>
        </div>
    )
}