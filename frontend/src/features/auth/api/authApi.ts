import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestData } from '../model/types';

export const handleAuth = createAsyncThunk(
    '@@login||registration',
    async ({ endPoint, dataUser }: RequestData, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:4444/${endPoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataUser),
            });

            const dataJson = await res.json();
            if (!res.ok) {
                return rejectWithValue(dataJson);
            }
            //перекидываем пользователя на главный экран приложения и записывам в хранилище данные
            if (dataJson.status === 'success') {
                localStorage.setItem('user-token', JSON.stringify(dataJson.token));
            }
            return dataJson;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);