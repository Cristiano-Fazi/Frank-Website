import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div src="../assets/Logo-no-background" alt="Company Logo"></div>
            <div>
                <Link to="/Submission"> Estimate </Link>
            </div>
        </nav>
    )
}