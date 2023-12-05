import styles from './StatusNumbers.module.scss';

export function StatusNumbers() {
    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>
                <div className={styles.textCell}>
                    <p className={styles.textNumber}>5k+</p>
                    <p className={styles.textDescription}>Prescriptions</p>
                </div>
                <div className={styles.textCell}>
                    <p className={styles.textNumber}>1k+</p>
                    <p className={styles.textDescription}>Appointments</p>
                </div>
                <div className={styles.textCell}>
                    <p className={styles.textNumber}>150+</p>
                    <p className={styles.textDescription}>Verified Doctors</p>
                </div>
            </div>
        </div>
    );
}