import styles from './team.module.css';
import { useTranslation } from 'react-i18next';
import teamPic from '../../assets/teamPic.png'

export default function OurTeam(){
    const { t, i18n } = useTranslation();
    return(
        <div className={styles.teamContainer}>
            <h1 className={styles.teamTitle}>{t("team.title")}</h1>
           
            <div className={styles.teamDescription}>
                 <p className={styles.teamText}>Chez Service d'Élagage François, nous prenons soin de vos arbres comme si c'étaient les nôtres. 🌳Notre expertise en élagage, abattage et entretien
                             des arbres est guidée par un seul objectif : assurer leur santé et leur bien-être. Forts de nombreuses années d'expérience, nos arboristes certifiés utilisent des techniques 
                             respectueuses et adaptées à chaque situation. Nous croyons qu'un arbre bien soigné est un arbre en pleine forme, et c'est pourquoi nous offrons des solutions sur mesure, en prenant 
                             toujours en compte les besoins spécifiques de vos arbres. Change this text to the correct english version once Frank sends it to us.</p>
                
                            <img src={teamPic} alt="team picture" className={styles.team_Pic} />
                

            </div>

        </div>
    )
}