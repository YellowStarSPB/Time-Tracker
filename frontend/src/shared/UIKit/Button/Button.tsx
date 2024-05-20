import styles from './Button.module.scss';

function Button() {
    return <button className={`primary-button ${styles.button}`}>Добавить запись</button>;
}

export default Button;
