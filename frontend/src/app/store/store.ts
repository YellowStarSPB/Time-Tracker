import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../../features/auth/model/authSlice';
import shoppingListReducer from '../../features/ShoppingList/model/shoppingListSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        shoppingList: shoppingListReducer
    },
    devTools:true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
