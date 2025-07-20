import submissionTopImg from '../../assets/submission-top.png';
import styles from './SubTop.module.css';
import { useTranslation } from 'react-i18next';

export default function SubTop(){
    const { t, i18n } = useTranslation();

    return(
        <div className={styles.submission_img_container}>
            <img
            src={submissionTopImg}
            alt="tree picture"
            className= {styles.submission_img}
            />

            <div className={styles.submission_img_text}>
                {t("estimate.header")}
            </div>
        </div>
    )
}