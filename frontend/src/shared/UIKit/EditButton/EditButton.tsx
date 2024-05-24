import styles from './EditButton.module.scss';

type BtnProp = {
    customStyles?: string;
    withoutWidth?: boolean;
};

function EditButton({ customStyles, withoutWidth }: BtnProp) {
    return (
        <button
            className={`${styles.editButton} ${customStyles} ${
                withoutWidth ? styles.withoutWidth : ''
            }`}
        ></button>
    );
}

export default EditButton;
