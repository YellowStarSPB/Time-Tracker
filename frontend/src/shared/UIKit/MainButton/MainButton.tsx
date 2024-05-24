import styles from './MainButton.module.scss';

type ButtonProp = {
    customStyles?: string;
    children: React.ReactNode
};

function MainButton({ children, customStyles }: ButtonProp) {
    return <button className={`${customStyles} ${styles.button}`}>{children}</button>;
}

export default MainButton;
