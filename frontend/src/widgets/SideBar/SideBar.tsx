import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { useAppDispatch } from '../../app/store/store-hooks';
import { totalLogOut } from '../../app/store/auth/authSlice';

const navMenu = [
    {
        title: 'Главная',
        url: '/',
    },
    {
        title: 'Записи',
        url: 'last-entries',
    },
    {
        title: 'Аналитика',
        url: 'tt',
    },
    {
        title: 'Настройки',
        url: 'ttt',
    },
];

function Sidebar() {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.sidebar}>
            <div className={styles.balance}>
                <span className={styles.balanceText}>Баланс</span>
                <p className={styles.balanceCount}>78 060,00 ₽</p>
            </div>
            <nav className={styles.navigate}>
                {navMenu.map(({ title, url }) => (
                    <NavLink
                        key={title}
                        to={url}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navigateLink} ${styles.active}`
                                : styles.navigateLink
                        }
                    >
                        {title}
                    </NavLink>
                ))}
            </nav>
            <button onClick={() => dispatch(totalLogOut())} className={styles.logOutBtn}>
                Выйти
            </button>
        </div>
    );
}

export default Sidebar;