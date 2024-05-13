import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';
import { IInput } from './inputTypes';

type InputProps = {
    type: string;
    name: string;
    placeholder?: string;
    isPhone?: boolean;
    isPassword?: boolean;
    customStyles?: string;
    dataInput: IInput;
};

function Input({
    type,
    name,
    placeholder,
    isPhone,
    isPassword,
    customStyles,
    dataInput,
}: InputProps) {
    //данные инпута и валидации
    const { value, onChange, onBlur, inputValid, isDirty, clearValue } = dataInput;
    //стэйт кнопки очищения инпута
    const [showClearButton, setShowClearButton] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    //ссылка на инпут
    const inputRef = useRef<HTMLInputElement | null>(null);
    const combinedStyles = [
        styles.formLabel,
        isPhone ? styles.phoneLabel : '',
        customStyles ? customStyles : '',
    ];
    const handleShowPassword = useCallback(() => {
        if (inputRef.current) {
            if (inputRef.current.getAttribute('type') === 'password') {
                inputRef.current.setAttribute('type', 'text');
                setShowPassword(true);
            } else {
                inputRef.current.setAttribute('type', 'password');
                setShowPassword(false);
            }
        }
    }, []);

    useEffect(() => {
        if (value.length >= 3) {
            setShowClearButton(true);
        } else {
            setShowClearButton(false);
        }
    }, [value]);

    return (
        <label
            className={`${combinedStyles.join(' ')} ${
                isDirty && !inputValid ? styles.error : ''
            } ${isDirty && inputValid ? styles.valid : ''}`}
        >
            <input
                ref={inputRef}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={styles.formInput}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            {isPassword && (
                <p onClick={handleShowPassword} className={styles.showPassword}>
                    {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                </p>
            )}
            {isPassword && (
                <span className={styles.passwordHint}>
                    пароль должен соответствовать:
                    <br></br>- только английский алфавит или цифры
                    <br></br>- одна заглавная буква
                    <br></br>- один символ из "@ # $ % &"
                    <br></br>- длина больше 8 символов
                </span>
            )}
            {isPhone && <span className={styles.defaultNumber}>+7</span>}
            <button
                onClick={clearValue}
                type="button"
                className={`${styles.clearBtn} ${showClearButton ? styles.showBtn : ''}`}
            ></button>
        </label>
    );
}

export default Input;
