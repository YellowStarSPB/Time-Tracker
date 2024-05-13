import { useState } from 'react';
import useValidation from './useValidation';

import { IInput, IValidations } from '../../UIKit/Input/inputTypes';

const useInput = (initialValue: string, validations: IValidations): IInput => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const eventTarget = e.target as HTMLInputElement;
        if (eventTarget.name === 'password'){
            setValue(eventTarget.value.replace(/[А-я<>!^_({})*+|.,-/\\?]/g, ''))

        
        } else {
            setValue(eventTarget.value.replace(/[<>!#$%^&*?/\\]/g, ''));
        }
    };

    const onBlur = (): void => {
        setIsDirty(true);
    };

    const clearValue = (): void => {
        setValue('');
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        clearValue,
        setIsDirty,
        ...valid,
    };
};

export default useInput;
