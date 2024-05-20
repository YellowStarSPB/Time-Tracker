import { RefObject, useEffect, useRef, useState } from 'react';

import styles from './LoginPage.module.scss';
import Input from '../../shared/UIKit/Input/Input';
import useInput from '../../shared/hooks/inputsHooks/useInput';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store/store-hooks';
import { fetchUser } from '../../app/store/auth/authSlice';


function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    //откуда был редирект
    const fromPage = location.state?.from?.pathname || '/';
    //токен юзера
    const token = useAppSelector((state) => state.auth.user.token);
    //статус лоадера
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const { status, message } = useAppSelector((state) => state.auth);
    //стейт переключения формы между "войти" и "зарегистрироваться"
    const [isEntryForm, setIsEntryForm] = useState<boolean>(true);
    //стейт ручки API
    const [apiUrl, setApiUrl] = useState<string>('');

    const [showMessage, setShowMessage] = useState<boolean>(false);
    //ссылка на ноду формы
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
    const handleShowMessage = (value: boolean) => {
        setShowMessage(value);
    };

    const handleSubmitForm = () => {
        /* 
        визуализируем ошибку или валидность, если нажали на кнопку
        без взаимодействия с формой
        */
        // handleShowMessage(false);
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
                dispatch(
                    fetchUser({
                        endPoint: apiUrl,
                        dataUser: JSON.stringify({
                            login: login.value,
                            password: password.value,
                        }),
                    }),
                )
                    .then((res) => {
                        if (res.type.includes('fullfiled')) {
                            navigate(fromPage, { replace: false });
                        }
                    })
                    .then(() => handleShowMessage(true));
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

    //fallback if user set in url path /login
    if (token) {
        return <Navigate to={fromPage} />;
    }

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
                    status === 'error' ? styles.errorMessage : ''
                } ${status === 'success' ? styles.successMessage : ''}`}
            >
                <p className={styles.messageText}>{message}</p>
                <button
                    onClick={() => handleShowMessage(false)}
                    className={styles.closeMessage}
                ></button>
            </div>
        </div>
    );
}

export default LoginPage;
