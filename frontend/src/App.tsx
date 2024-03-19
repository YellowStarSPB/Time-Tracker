import Calendar from './components/Calendar/Calendar';
import MyAccount from './components/MyAccount/MyAccount';
import MyCards from './components/MyCards/MyCards';
import SideBar from './components/SideBar/SideBar';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import Button from './components/UI/Button/Button';
import LastEntries from './components/LastEntries/LastEntries';
import CircularStructure from './components/CircularStructure/CircularStructure';
import ShoppingList from './components/ShoppingList/ShoppingList';
import MoneyMovement from './components/MoneyMovement/MoneyMovement';
import BudgetLimits from './components/BudgetLimits/BudgetLimits';

function App() {
    return (
        <div className="container">
            <SideBar />

            <div className="right-side">
                <div className="right-side__top">
                    <div className="right-side__top-content">
                        <MyCards />
                        <div className="right-side__top-account">
                            <ThemeButton />
                            <MyAccount />
                        </div>
                    </div>

                    <div className="right-side__top-management">
                        <Calendar />
                        <Button />
                    </div>
                </div>

                <div className="right-side__content-layout">
                    <LastEntries />
                    <CircularStructure />
                    <ShoppingList />
                    <MoneyMovement />
                    <BudgetLimits />
                </div>
            </div>
        </div>
    );
}

export default App;
