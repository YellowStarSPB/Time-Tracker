import styles from './Field.module.scss';

type Props = {
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    className: string;
};

function Field({ type, name, placeholder, required, className }: Props) {
    return (
        <label className={`${styles.field} ${className}`}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className={className + '-input'}
            />
        </label>
    );
}

export default Field;
