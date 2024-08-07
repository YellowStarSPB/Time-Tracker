import { Outlet, Route, Routes } from 'react-router-dom';
//required hock
import RequiredAuth from '../shared/hocs/RequiredAuth';
//pages
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
//components
import MyCards from '../widgets/MyCards/MyCards';
import MyAccount from '../widgets/MyAccount/MyAccount';
import ThemeButton from '../widgets/ThemeToggle/ThemeToggle';
import Sidebar from '../widgets/Sidebar/Sidebar';

function App() {
    return (
        <Routes>
            <Route element={<RequiredAuth />}>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="last-entries" element={<div>last-entries</div>} />
                </Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    );
}

export default App;
const MainLayout = () => (
    <>
        <Sidebar />
        <div className="content-side">
            <div className="header">
                <MyCards />
                <div className="header__right">
                    <ThemeButton />
                    <MyAccount />
                </div>
            </div>
            <Outlet />
        </div>
    </>
);
