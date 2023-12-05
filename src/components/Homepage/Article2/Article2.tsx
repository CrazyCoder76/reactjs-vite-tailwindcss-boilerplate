import { Container } from 'components/Layout';
import styles from './Article2.module.scss';
import { DashButtons } from '..';

export function Article2() {
    return (
        <div className={styles.root} style={{backgroundImage: "url('/images/homepage/asset-3.png"}}>
            <Container>
                <div className={styles.article}>
                    <div className={styles.title}>
                        <img className={styles.icon} src="/images/renad-icon.png" alt="renad"/>
                        <h2 className={styles.titleText}>How NAD+ Therapy Restores Neurotransmitter Balance</h2>
                    </div>
                    <p className={styles.description}>Neurotransmitters are chemical messengers that facilitate communication between nerve cells (neurons) in the brain and throughout the nervous system. An imbalance in neurotransmitters can lead to a variety of mental health issues, including depression, anxiety, and addiction. NAD+ therapy indirectly influences neurotransmitter balance by</p>
                    <div className={styles.dropText}>
                        <div className={styles.textTitle}>
                            <div className={styles.downBtn+ ' ' + styles.btnActive}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                    <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                                </svg>
                            </div>
                            <h3 className={styles.text + ' ' + styles.textActive}>Enhancing Cellular Function</h3>
                        </div>
                        <p className={styles.textDescription}>
                        NAD+ is a critical component in the production of adenosine triphosphate (ATP), the cell's primary energy currency. By restoring NAD+ levels, cells function optimally, potentially influencing neurotransmitter synthesis, release, and receptor sensitivity.
                        </p>
                    </div>
                    <div className={styles.dropText}>
                        <div className={styles.textTitle}>
                            <div className={styles.downBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                    <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                                </svg>
                            </div>
                            <h3 className={styles.text}>Supporting Cellular Repair</h3>
                        </div>
                    </div>
                    <div className={styles.dropText}>
                        <div className={styles.textTitle}>
                            <div className={styles.downBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                    <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                                </svg>
                            </div>
                            <h3 className={styles.text}>Boosting Mood and Mental Clarity</h3>
                        </div>
                    </div>
                    <div className={styles.buttonPad}>
                        <DashButtons/>
                    </div>
                </div>
            </Container>
        </div>
    );
}