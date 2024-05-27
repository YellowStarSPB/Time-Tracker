import { createSlice } from '@reduxjs/toolkit';
import { ShoppingListState } from './types';
import { getShoppingItems } from '../api/shoppingListApi';

const initialState: ShoppingListState = {
    items: [],
    status: 'loading',
    errorMessage: '',
};

const shoppingList = createSlice({
    name: '@@shoppingList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShoppingItems.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.status = 'success';
                state.errorMessage = '';
            })
            .addCase(getShoppingItems.pending, (state) => {
                state.status = 'loading';
                state.errorMessage = '';
            })
            .addCase(getShoppingItems.rejected, (state, action) => {
                if (action.payload) {
                    state.errorMessage = action.payload.errorMessage;
                    state.status = 'error';
                }
            });
    },
});

export default shoppingList.reducer;
