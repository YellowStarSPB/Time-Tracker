import { useState } from 'react';
import styles from './MyCards.module.scss';
import Skeleton from '../../shared/UIKit/Skeleton/Skeleton';

function MyCards() {
    const [loading, setLoading] = useState(true);
    useState(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div className={styles.myCards}>
            {loading ? (
                <Skeleton customStyles={styles.cardsSkeleton}/>
            ) : (
                <>
                    <div className={`${styles.card} ${styles.activeCard}`}>
                        <h3 className={styles.cardTitle}>Наличные</h3>
                        <p className={styles.cardMonney}>60,00 ₽</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Моя карта</h3>
                        <p className={styles.cardMonney}>78 000,15 ₽</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Кредитка</h3>
                        <p className={styles.cardMonney}>600 000,00 ₽</p>
                        <span className={styles.cardMark}>Не в статистике</span>
                    </div>
                    <button className={styles.addCard}></button>
                </>
            )}
        </div>
    );
}

export default MyCards;
