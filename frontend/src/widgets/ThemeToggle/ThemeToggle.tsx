import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
    return (
        <div id='theme-btn' className={styles.themeButton}>
            <span className={`${styles.darkMode}`}></span>
            <span className={`${styles.lightMode} ${styles.activeTheme}`}></span>
        </div>
    );
}

export default ThemeToggle;
