import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestAuthorizationData, ResponseData } from '../model/types';

export const handleAuthorization = createAsyncThunk<
    ResponseData,
    RequestAuthorizationData,
    { rejectValue: ResponseData }
>(
    '@@auth/authorization',
    async ({ endPoint, token }: RequestAuthorizationData, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:4444/${endPoint}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const dataJson = await res.json();
            console.log(dataJson,'DATA')
            if (!res.ok) {
                return rejectWithValue(dataJson);
            }
            // //перекидываем пользователя на главный экран приложения и записывам в хранилище данные
            // if (dataJson.status === 'success') {
            //     localStorage.setItem('user-token', JSON.stringify(dataJson.token));
            // }
            return dataJson;
        } catch (error) {
            return rejectWithValue({
                status: 'error',
                message: 'Что-то пошло не так',
                token: '',
            });
        }
    },
);
