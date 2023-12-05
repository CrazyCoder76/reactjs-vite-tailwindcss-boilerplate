import { DashButtons } from '..';
import styles from './DashPage.module.scss';

export function DashPage() {
    return (
        <div className={styles.root}>
            <div className={styles.dashImage} style={{ backgroundImage: "url('/images/homepage/asset-1.png')"}}>
                <div className={styles.dashTitle}>
                    <h1 className={styles.title}>
                        Take Control Of Your Recovery Journey.
                    </h1>
                    <p className={styles.description} style={{ lineHeight: "normal" }}>
                        Are you ready to embark on a transformative journey to optimize your vitality and well-being? Look no further than ReNAD+.
                    </p>
                </div>
                <DashButtons/>
            </div>
        </div>
    );
}