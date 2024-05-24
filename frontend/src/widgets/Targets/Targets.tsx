import EditButton from '../../shared/UIKit/EditButton/EditButton';
import styles from './Targets.module.scss';

function Targets() {
    return (
        <div className={styles.budgetLimits}>
            <h2 className={styles.title}>Цели</h2>
            <EditButton customStyles={styles.editButton} />
            <div className={styles.targetsList}>
                <div className={styles.item}>
                    <h3 className={styles.itemTitle}>Отпуск</h3>
                    <div className={styles.itemInfo}>
                        <p className={styles.endDate}>осталось 6 месяцев</p>
                        <p className={styles.howMuchMoney}>еще 85 000 ₽</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressLine}></div>
                    </div>
                    <div className={styles.moneyInfo}>
                        <p className={styles.currentMoney}>15 000 ₽</p>
                        <span className={styles.moneyInfoDot}></span>
                        <p className={styles.needMoney}>100 000 ₽</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.itemTitle}>Отпуск</h3>
                    <div className={styles.itemInfo}>
                        <p className={styles.endDate}>осталось 6 месяцев</p>
                        <p className={styles.howMuchMoney}>еще 85 000 ₽</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressLine}></div>
                    </div>
                    <div className={styles.moneyInfo}>
                        <p className={styles.currentMoney}>15 000 ₽</p>
                        <span className={styles.moneyInfoDot}></span>
                        <p className={styles.needMoney}>100 000 ₽</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.itemTitle}>Отпуск</h3>
                    <div className={styles.itemInfo}>
                        <p className={styles.endDate}>осталось 6 месяцев</p>
                        <p className={styles.howMuchMoney}>еще 85 000 ₽</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressLine}></div>
                    </div>
                    <div className={styles.moneyInfo}>
                        <p className={styles.currentMoney}>15 000 ₽</p>
                        <span className={styles.moneyInfoDot}></span>
                        <p className={styles.needMoney}>100 000 ₽</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.itemTitle}>Отпуск</h3>
                    <div className={styles.itemInfo}>
                        <p className={styles.endDate}>осталось 6 месяцев</p>
                        <p className={styles.howMuchMoney}>еще 85 000 ₽</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressLine}></div>
                    </div>
                    <div className={styles.moneyInfo}>
                        <p className={styles.currentMoney}>15 000 ₽</p>
                        <span className={styles.moneyInfoDot}></span>
                        <p className={styles.needMoney}>100 000 ₽</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.itemTitle}>Отпуск</h3>
                    <div className={styles.itemInfo}>
                        <p className={styles.endDate}>осталось 6 месяцев</p>
                        <p className={styles.howMuchMoney}>еще 85 000 ₽</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressLine}></div>
                    </div>
                    <div className={styles.moneyInfo}>
                        <p className={styles.currentMoney}>15 000 ₽</p>
                        <span className={styles.moneyInfoDot}></span>
                        <p className={styles.needMoney}>100 000 ₽</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Targets;
