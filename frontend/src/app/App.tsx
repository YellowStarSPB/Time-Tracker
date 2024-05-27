import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';

import RequiredAuth from '../shared/hocs/RequiredAuth';

import MyCards from '../widgets/MyCards/MyCards';
import MyAccount from '../widgets/MyAccount/MyAccount';
import ThemeButton from '../widgets/ThemeToggle/ThemeToggle';
import Sidebar from '../widgets/Sidebar/Sidebar';
import { useAppDispatch } from './store/store-hooks';
import { useEffect } from 'react';
import { setAuth } from '../features/auth/model/authSlice';

const preloader = document.getElementById('curtain');

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const storedToken = localStorage.getItem('user-token');

        if (storedToken) {
            dispatch(setAuth(storedToken));
        }
        preloader?.classList.add('loaded');
    }, [dispatch]);

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
