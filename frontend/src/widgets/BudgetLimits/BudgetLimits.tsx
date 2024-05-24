import { useEffect, useState } from 'react';
import styles from './BudgetLimits.module.scss';
import EditButton from '../../shared/UIKit/EditButton/EditButton';

function BudgetLimits() {
    const [widthLine, setWidthLine] = useState(0);
    const [widthLine1, setWidthLine1] = useState(0);
    //стейт для анимации линии бюджета
    useEffect(() => {
        setWidthLine(2264 / (35000 / 100));
        setWidthLine1(2500 / (5000 / 100));
    }, []);
    return (
        <div className={styles.budgetLimits}>
            <h2 className={styles.title}>Бюджетные лимиты</h2>
            <EditButton customStyles={styles.editButton} />

            <div className={styles.scrollableBlock}>
                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemMoney}>35 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--error-light)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine}%`,
                                    background: 'var(--error-dark)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2 264 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>
                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemMoney}>35 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--error-light)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine}%`,
                                    background: 'var(--error-dark)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2 264 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>
                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemMoney}>35 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--error-light)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine}%`,
                                    background: 'var(--error-dark)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2 264 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>
                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemMoney}>35 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--error-light)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine}%`,
                                    background: 'var(--error-dark)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2 264 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>
                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemMoney}>35 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--error-light)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine}%`,
                                    background: 'var(--error-dark)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2 264 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>

                <div className={styles.budgetList}>
                    <div className={styles.item}>
                        <div className={styles.itemTop}>
                            <h3 className={styles.itemTitle}>Развлечения</h3>
                            <p className={styles.itemMoney}>5 000 ₽</p>
                        </div>
                        <div
                            style={{ background: 'var(--light-blue)' }}
                            className={styles.progressBar}
                        >
                            <div
                                style={{
                                    width: `${widthLine1}%`,
                                    background: 'var(--blue)',
                                }}
                                className={styles.progressLine}
                            ></div>
                        </div>
                        <div className={styles.bottom}>
                            <p className={styles.moneySpent}>2500 ₽</p>
                            <p className={styles.daysLeft}>осталось 28 дней</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetLimits;
