import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
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

const preloader = document.getElementById('curtain');

function App() {
    //при первой отрисовке приложения, убираем шторку лоадера
    useEffect(() => {
        preloader?.classList.add('loaded');
    }, []);

    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <RequiredAuth>
                        <Sidebar />
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
                                <Route
                                    path="last-entries"
                                    element={<div>last-entries</div>}
                                />
                            </Routes>
                        </div>
                    </RequiredAuth>
                }
            />

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
