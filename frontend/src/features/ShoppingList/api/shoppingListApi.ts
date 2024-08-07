import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';
import { ResponseShoppingData } from '../model/types';

export const getShoppingItems = createAsyncThunk<
    ResponseShoppingData,
    undefined,
    { rejectValue: { errorMessage: string } }
>('@@shoppingList/getShoppingItems', async (_, { getState, rejectWithValue }) => {
    //получаем токен из стора
    const store = getState() as RootState;
    const token = store.auth.token;
    try {
        const res = await fetch(`http://localhost:4444/api/purchase-list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const dataJson = await res.json();
        if (!res.ok) {
            return rejectWithValue(dataJson);
        }

        return dataJson;
    } catch (error) {
        return rejectWithValue({
            errorMessage: 'Что-то пошло не так',
        });
    }
});
