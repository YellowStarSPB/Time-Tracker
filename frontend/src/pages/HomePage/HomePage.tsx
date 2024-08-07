import MainButton from '../../shared/UIKit/MainButton/MainButton';
import BudgetLimits from '../../widgets/BudgetLimits/BudgetLimits';
import Calendar from '../../widgets/Calendar/Calendar';
import LastEntries from '../../widgets/LastEntries/LastEntries';
import ShoppingList from '../../features/ShoppingList/ShoppingList';
import Targets from '../../widgets/Targets/Targets';

import styles from './HomePage.module.scss';

function HomePage() {
    console.log('rerender')
    return (
        <div className={`container ${styles.homePage}`}>
            <div className={styles.homePageTop}>
                <Calendar />
                <MainButton customStyles={styles.addButton}>Добавить запись</MainButton>
            </div>
            <div className={styles.homePageContent}>
                <div className={styles.mainBlocks}>
                    <div className={styles.lastEntriesSection}>
                        <LastEntries />
                    </div>
                    <div className={styles.shopListSection}>
                        <ShoppingList />
                    </div>
                </div>
                <div className={styles.widgets}>
                    <div className={styles.budgetLimitsSection}>
                        <BudgetLimits />
                    </div>
                    <div className={styles.tragetsSection}>
                        <Targets />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
