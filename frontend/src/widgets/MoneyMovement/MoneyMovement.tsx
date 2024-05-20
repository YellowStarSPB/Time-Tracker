import { useEffect, useState } from 'react';
import styles from './MoneyMovement.module.scss';

function MoneyMovement() {
    const [moneyCount, setMoneyCount] = useState({ incomeMoney: 0, spendingMoney: 0 });

    useEffect(() => {
        setMoneyCount((prev) => ({ ...prev, incomeMoney: 5000, spendingMoney: 2264 }));
    }, []);

    // function convertNumber(number: number): string {
    //     const string = (number / 2).toString();
    //     if (number > 10000 && number < 100000) {
    //         return `${string.substring(0, 2)}к`;
    //     } else if (number > 100000 && number < 1000000) {
    //         return `${string.substring(0, 2)}к`;
    //     } else if (number > 1000000) {
    //         return `${string.substring(0, 3)}кк`;
    //     } else {
    //         return string.substring(0, 1) + '.' + string.substring(1, 2);
    //     }
    // }

    // console.log(convertNumber(300));

    return (
        <div className={styles.moneyMove}>
            <div className={styles.moneyMoveTop}>
                <h3 className={styles.title}>Движение средств</h3>
                <div className={styles.calendar}>Декабрь</div>
            </div>
            <div className={styles.moneyMoveContent}>
                <div className={styles.chart}>
                    <span className={`${styles.chartPos} ${styles.chart1}`}>
                        {moneyCount.incomeMoney.toString().slice(0, 1)}к
                    </span>
                    <span className={`${styles.chartPos} ${styles.chart2}`}>
                        2.5к
                    </span>
                    <span className={`${styles.chartPos} ${styles.chart3}`}>0к</span>
                    <div
                        style={{
                            height: `${
                                moneyCount.incomeMoney / (moneyCount.incomeMoney / 100)
                            }%`,
                        }}
                        className={styles.incomeСhart}
                    ></div>
                    <div
                        style={{
                            height: `${
                                moneyCount.spendingMoney /
                                (moneyCount.incomeMoney / 100)
                            }%`,
                        }}
                        className={styles.spendingСhart}
                    ></div>
                </div>
                <div className={styles.moneyInfo}>
                    <div className={`${styles.incomeMoney} ${styles.moneyInfoItem}`}>
                        <span className={styles.moneyMark}>доходы</span>
                        <p className={styles.moneyText}>
                            {moneyCount.incomeMoney.toLocaleString()},00 ₽
                        </p>
                    </div>
                    <div className={`${styles.spendingMoney} ${styles.moneyInfoItem}`}>
                        <span className={styles.moneyMark}>доходы</span>
                        <p className={styles.moneyText}>
                            {moneyCount.spendingMoney.toLocaleString()},00 ₽
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoneyMovement;
