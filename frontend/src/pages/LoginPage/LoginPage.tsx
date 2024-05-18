import { RefObject, useEffect, useRef, useState } from 'react';

import styles from './LoginPage.module.scss';
import Input from '../../shared/UIKit/Input/Input';
import useInput from '../../shared/hooks/inputsHooks/useInput';
import { useNavigate } from 'react-router-dom';
type responseDataType = {
    message: string;
    status: string;
    userData?: {
        id: number;
        login: string;
        token: string;
    };
};

function LoginPage() {
    const [isEntryForm, setIsEntryForm] = useState<boolean>(true); //if true - entry form
    //API URL
    const [apiUrl, setApiUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [responseData, setResponseData] = useState<responseDataType | undefined>(
        undefined,
    );
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const navigate = useNavigate();

    const formRef = useRef(null) as RefObject<HTMLFormElement> | null;

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
    const handleShowMessage = () => {
        setShowMessage(false);
    };

    const handleSubmitForm = async () => {
        //визуализируем ошибку или валидность
        if (!login.isDirty || !password.isDirty) {
            login.onBlur();
            password.onBlur();
            return;
        }

        if (formRef?.current) {
            //флаг доступа для отправки формы
            let isValidForm: boolean = true;

            //проверяем на валидность поля
            if (password.inputValid && login.inputValid) {
                isValidForm = true;
            } else {
                isValidForm = false;
            }
            //если поля формы валидны - отправляем запрос
            if (isValidForm) {
                setIsLoading(true);
                try {
                    const res = await fetch(`http://localhost:4444/${apiUrl}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            login: login.value,
                            password: password.value,
                        }),
                    });
                    //парсим данные
                    const dataJson: responseDataType = await res.json();

                    setResponseData(dataJson);
                    setShowMessage(true);
                    setIsLoading(false);
                    //перекидываем пользователя на главный экран приложения и записывам в хранилище данные
                    if (dataJson.status === 'success') {
                        localStorage.setItem('user', JSON.stringify(dataJson.userData));
                        navigate('/', { replace: true });
                    }
                } catch (error) {
                    setResponseData({
                        status: 'error',
                        message: 'Что-то пошло не так',
                    });
                    setShowMessage(true);
                    setIsLoading(false);
                }
            }
        }
    };
    //задаем значение для url запроса
    useEffect(() => {
        if (isEntryForm) {
            setApiUrl('api/login');
        } else {
            setApiUrl('api/registration');
        }
    }, [isEntryForm]);

    return (
        <div className={styles.loginPage}>
            <div className={styles.formWrapper}>
                <form ref={formRef} className={styles.form}>
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
                <button onClick={handleSubmitForm} className={styles.entryButton}>
                    {isEntryForm ? 'Войти' : 'Зарегистрироваться'}
                </button>
                <button onClick={handleChangeForm} className={styles.registrationButton}>
                    {isEntryForm ? 'Зарегистрироваться' : 'Войти в аккаунт'}
                </button>
                {isLoading && (
                    <div className={styles.preloaderWrapper}>
                        <div className={styles.preloader}>
                            <div className={styles.preloaderCoin}>$</div>
                            <div className={styles.preloaderLine}></div>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`${styles.message} ${showMessage ? styles.active : ''} ${
                    responseData?.status === 'error'
                        ? styles.errorMessage
                        : styles.successMessage
                }`}
            >
                <p className={styles.messageText}>{responseData?.message}</p>
                <button
                    onClick={handleShowMessage}
                    className={styles.closeMessage}
                ></button>
            </div>
        </div>
    );
}

export default LoginPage;
