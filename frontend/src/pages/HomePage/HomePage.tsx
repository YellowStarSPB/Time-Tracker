import { useState } from 'react';
import MainButton from '../../shared/UIKit/MainButton/MainButton';
import Skeleton from '../../shared/UIKit/Skeleton/Skeleton';
import BudgetLimits from '../../widgets/BudgetLimits/BudgetLimits';
import Calendar from '../../widgets/Calendar/Calendar';
import LastEntries from '../../widgets/LastEntries/LastEntries';
import ShoppingList from '../../widgets/ShoppingList/ShoppingList';
import Targets from '../../widgets/Targets/Targets';

import styles from './HomePage.module.scss';

function HomePage() {
    const [loading, setLoading] = useState(true);
    useState(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div className={`container ${styles.homePage}`}>
            <div className={styles.homePageTop}>
                <Calendar />
                <MainButton customStyles={styles.addButton}>Добавить запись</MainButton>
            </div>
            <div className={styles.homePageContent}>
                <div className={styles.mainBlocks}>
                    <div className={styles.lastEntriesSection}>
                        {loading ? (
                            <Skeleton customStyles={styles.blocksSkeleton} />
                        ) : (
                            <LastEntries />
                        )}
                    </div>
                    <div className={styles.shopListSection}>
                        {loading ? (
                            <Skeleton customStyles={styles.blocksSkeleton} />
                        ) : (
                            <ShoppingList />
                        )}
                    </div>
                </div>
                <div className={styles.widgets}>
                    <div className={styles.budgetLimitsSection}>
                        {loading ? (
                            <Skeleton customStyles={styles.blocksSkeleton} />
                        ) : (
                            <BudgetLimits />
                        )}
                    </div>
                    <div className={styles.tragetsSection}>
                        {loading ? (
                            <Skeleton customStyles={styles.blocksSkeleton} />
                        ) : (
                            <Targets />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
