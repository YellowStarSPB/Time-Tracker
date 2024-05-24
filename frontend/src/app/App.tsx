// import Calendar from '../components/Calendar/Calendar';
// import MyAccount from '../components/MyAccount/MyAccount';
// import MyCards from '../components/MyCards/MyCards';
// import SideBar from '../components/SideBar/SideBar';
// import ThemeButton from '../components/UI/ThemeButton/ThemeButton';
// import Button from '../components/UI/Button/Button';
// import LastEntries from '../components/LastEntries/LastEntries';
// import CircularStructure from '../components/CircularStructure/CircularStructure';
// import ShoppingList from '../components/ShoppingList/ShoppingList';
// import MoneyMovement from '../components/MoneyMovement/MoneyMovement';
// import BudgetLimits from '../components/BudgetLimits/BudgetLimits';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';

import RequiredAuth from '../shared/hocs/RequiredAuth';
import SideBar from '../widgets/Sidebar/Sidebar';
import MyCards from '../widgets/MyCards/MyCards';
import MyAccount from '../widgets/MyAccount/MyAccount';
import ThemeButton from '../widgets/ThemeToggle/ThemeToggle';

function App() {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <RequiredAuth>
                        <SideBar />
                        <div className="content-side">
                            <div className="header">
                                <MyCards />
                                <div className="header__right">
                                    <ThemeButton />
                                    <MyAccount />
                                </div>
                            </div>
                            <Routes>
                                <Route index element={<HomePage />} />
                                <Route path="test" element={<div>test</div>} />
                            </Routes>
                        </div>
                    </RequiredAuth>
                }
            />

            <Route path="/login" element={<LoginPage />} />
        </Routes>

        // <div className="container">
        //     <SideBar />

        //     <div className="right-side">
        //         <div className="right-side__top">
        //             <div className="right-side__top-content">
        //                 <MyCards />
        //                 <div className="right-side__top-account">
        //                     <ThemeButton />
        //                     <MyAccount />
        //                 </div>
        //             </div>

        //             <div className="right-side__top-management">
        //                 <Calendar />
        //                 <Button />
        //             </div>
        //         </div>

        //         <div className="right-side__content-layout">
        //             <LastEntries />
        //             <CircularStructure />
        //             <ShoppingList />
        //             <MoneyMovement />
        //             <BudgetLimits />
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;
