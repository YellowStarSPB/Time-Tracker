import styles from './ButtonWithBorder.module.scss';

type ButtonProp = {
    customStyles?: string;
    children: React.ReactNode;
};

function ButtonWithBorder({ children, customStyles }: ButtonProp) {
    return (
        <button className={`${customStyles} ${styles.buttonWithBorder}`}>
            {children}
        </button>
    );
}

export default ButtonWithBorder;
