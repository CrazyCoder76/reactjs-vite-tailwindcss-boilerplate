import styles from './Article1.module.scss';

export function Article1() {
    return (
        <div className={styles.root}>
            <div className={styles.picture}>
                <img src="/images/homepage/asset-2.png"></img>
            </div>
            <div className={styles.article}>
                <div className={styles.title}>
                    <img className={styles.icon} src="/images/renad-icon.png" alt="renad"/>
                    <h2 className={styles.titleText}>What is NAD+ Therapy?</h2>
                </div>
                <p className={styles.description}>NAD+ (Nicotinamide Adenine Dinucleotide) therapy is an innovative approach to health and wellness that harnesses the power of a naturally occurring coenzyme, NAD+, to restore cellular function, enhance energy levels, and promote overall well-being. This cutting-edge therapy has gained prominence for its potential to address a wide range of health concerns. Here's a closer look at the basics of NAD+ therapy, how it restores neurotransmitter balance, and its applications.</p>
                <div className={styles.dropText}>
                    <div className={styles.textTitle}>
                        <div className={styles.downBtn+ ' ' + styles.btnActive}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                            </svg>
                        </div>
                        <h3 className={styles.text + ' ' + styles.textActive}>Increased Energy Production</h3>
                    </div>
                    <p className={styles.textDescription}>
                    NAD+ plays a critical role in the cellular energy production process, particularly in the mitochondria. By replenishing NAD+ levels, NAD+ therapy may enhance cellular energy production, leading to increased energy levels and reduced fatigue.
                    </p>
                </div>
                <div className={styles.dropText}>
                    <div className={styles.textTitle}>
                        <div className={styles.downBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                            </svg>
                        </div>
                        <h3 className={styles.text}>Enhanced Cognitive Function</h3>
                    </div>
                </div>
                <div className={styles.dropText}>
                    <div className={styles.textTitle}>
                        <div className={styles.downBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                <path d="M11.7314 19L0.90613 0.249998L22.5568 0.25L11.7314 19Z"/>
                            </svg>
                        </div>
                        <h3 className={styles.text}>Enhanced Physical Performance and Recovery</h3>
                    </div>
                </div>
                <p className={styles.linkText}>View More Benefits</p>
            </div>
        </div>
    );
}