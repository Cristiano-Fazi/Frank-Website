import submissionTopImg from '../../assets/submission-top.png';
import styles from './subTop.module.css';

export default function SubTop(){
    return(
        <div className={styles.submission_img_container}>
            <img
            src={submissionTopImg}
            alt="tree picture"
            className= {styles.submission_img}
            />

            <div className={styles.submission_img_text}>
                Get a free Estimate from our Trusted Professionals
            </div>
        </div>
    )
}