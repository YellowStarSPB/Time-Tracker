import Button from '../../shared/UIKit/Button/Button';
import ThemeButton from '../../shared/UIKit/ThemeButton/ThemeButton';
import BudgetLimits from '../../widgets/BudgetLimits/BudgetLimits';
import Calendar from '../../widgets/Calendar/Calendar';
// import CircularStructure from '../../widgets/CircularStructure/CircularStructure';
import LastEntries from '../../widgets/LastEntries/LastEntries';
import MoneyMovement from '../../widgets/MoneyMovement/MoneyMovement';
import MyAccount from '../../widgets/MyAccount/MyAccount';
import MyCards from '../../widgets/MyCards/MyCards';
import ShoppingList from '../../widgets/ShoppingList/ShoppingList';
import SideBar from '../../widgets/SideBar/SideBar';
import styles from './HomePage.module.scss';

function HomePage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.rightSide}>
                <div className={styles.rightSideTop}>
                    <div className={styles.rightSideInfo}>
                        <MyCards />
                        <div className={styles.rightSideAccount}>
                            <ThemeButton />
                            <MyAccount />
                        </div>
                    </div>
                    <div className={styles.rightSideManagement}>
                        <Calendar />
                        <Button />
                    </div>
                </div>

                <div className={styles.rightSideContentLayout}>
                    <LastEntries />
                    {/* <CircularStructure/> */}
                    <ShoppingList />
                    <MoneyMovement />
                    <BudgetLimits />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
