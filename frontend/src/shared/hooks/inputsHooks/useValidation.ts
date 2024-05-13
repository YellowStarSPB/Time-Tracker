import { useEffect, useState } from 'react';
import { IUseValidation, IValidations } from '../../UIKit/Input/inputTypes';

const patterns = {
    tel: /\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,
    // email: /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,6}$/,
    msg: /[^<>[\]%&'`]+$/,
    password: /(?=.*[@#$%&])(?=.*[A-Z])/,
};
const useValidation = (value: string, validations: IValidations): IUseValidation => {
    const [isEmpty, setEmpty] = useState(true);
    // const [isReq, setReq] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    // const [commentError, setCommentError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    // @ts-expect-error: error message
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'maxLength':
                    // @ts-expect-error: error message
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    break;
                case 'isEmail':
                    patterns.email.test(value)
                        ? setEmailError(false)
                        : setEmailError(true);
                    break;
                case 'isPhone':
                    patterns.tel.test(value) ? setPhoneError(false) : setPhoneError(true);
                    break;
                case 'isPassword':
                    patterns.password.test(value)
                        ? setPasswordError(false)
                        : setPasswordError(true);
                    break;
                // case 'isComment':
                //     if (value.length !== 0) {
                //         patterns.msg.test(value)
                //             ? setCommentError(false) && setEmpty(false)
                //             : setCommentError(true) && setEmpty(true);
                //     } else {
                //         setEmpty(false);
                //     }
                //     break;
            }
        }
    }, [value, validations]);
    useEffect(() => {
        if (
            isEmpty ||
            maxLengthError ||
            minLengthError ||
            emailError ||
            phoneError ||
            passwordError
            // commentError
        ) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError, phoneError, passwordError]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        passwordError,
        inputValid,
    };
};
export default useValidation;
