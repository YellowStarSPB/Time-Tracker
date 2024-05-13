import { useState } from 'react';

import styles from './LoginPage.module.scss';
import Input from '../../shared/UIKit/Input/Input';
import useInput from '../../shared/hooks/inputsHooks/useInput';

function LoginPage() {
    const [isEntryForm, setIsEntryForm] = useState<boolean>(true); //if true - entry form
    const login = useInput('', {
        minLength: 3,
        isEmpty: true,
    });

    const password = useInput('', {
        minLength: 8,
        isEmpty: true,
        isPassword: true,
    });

    const handleChangeForm = () => {
        if (isEntryForm) {
            setIsEntryForm(false);
        } else {
            setIsEntryForm(true);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.formWrapper}>
                <form className={styles.form}>
                    <h2
                        className={`${styles.formTitle} ${
                            !isEntryForm ? styles.registration : ''
                        }`}
                    >
                        {isEntryForm ? 'Вход' : 'Регистрация'}
                    </h2>
                    {!isEntryForm && (
                        <p className={styles.formDescr}>
                            Чтобы ваши данные сохранялись, необходимо создать аккаунт
                        </p>
                    )}
                    <div className={styles.inputs}>
                        <Input
                            dataInput={login}
                            type="text"
                            name="login"
                            placeholder="Логин"
                            customStyles={styles.formInput}
                        />
                        <Input
                            dataInput={password}
                            type="password"
                            name="password"
                            isPassword
                            placeholder="Пароль"
                            customStyles={styles.formInput}
                        />
                    </div>
                    {/* {isEntryForm && (
                        <button className={styles.recoverPassword} type="button">
                            Восстановить пароль
                        </button>
                    )} */}
                </form>
                <button className={styles.entryButton}>
                    {isEntryForm ? 'Войти' : 'Зарегистрироваться'}
                </button>
                <button onClick={handleChangeForm} className={styles.registrationButton}>
                    {isEntryForm ? 'Зарегистрироваться' : 'Войти в аккаунт'}
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
