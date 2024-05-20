import styles from './ThemeButton.module.scss';

function ThemeButton() {
    return (
        <div className={styles.themeButton}>
            <span className={`${styles.darkMode}`}></span>
            <span className={`${styles.lightMode} ${styles.activeTheme}`}></span>
        </div>
    );
}

export default ThemeButton;
