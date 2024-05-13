export interface IValidations {
    isEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isPhone?: boolean;
    isComment?: boolean;
    isPassword?: boolean;
}

export interface IUseValidation {
    isEmpty: boolean;
    minLengthError: boolean;
    maxLengthError: boolean;
    emailError: boolean;
    passwordError: boolean;
    phoneError: boolean;
    inputValid: boolean;
}

export interface IInput extends IUseValidation {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDirty: boolean;
    clearValue: () => void;
    setIsDirty: React.Dispatch<React.SetStateAction<boolean>>;
}
