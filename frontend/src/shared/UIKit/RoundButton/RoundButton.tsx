import styles from './RoundButton.module.scss';

type ButtonProp = {
    customStyles?: string;
    children: React.ReactNode;
};

function RoundButton({ children, customStyles }: ButtonProp) {
    return (
        <button className={`${customStyles} ${styles.roundButton}`}>{children}</button>
    );
}

export default RoundButton;
