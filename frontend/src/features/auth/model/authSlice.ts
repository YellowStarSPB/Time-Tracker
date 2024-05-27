import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, ResponseData } from './types';
import { handleAuth } from '../api/authApi';
import { AppDispatch } from '../../../app/store/store';

const initialState: AuthState = {
    isAuthenticated: false,
    token: '',
    status: null,
    message: '',
    isLoading: false,
};

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        setAuth: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                handleAuth.fulfilled,
                (state, action: PayloadAction<ResponseData>) => {
                    state.isLoading = false;
                    state.status = action.payload.status;
                    state.message = action.payload.message;
                    state.token = action.payload.token;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                    state.message = '';
                    state.status = null;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action: PayloadAction<ResponseData>) => {
                    state.isLoading = false;
                    state.status = action.payload.status || 'error';
                    state.message = action.payload.message;
                    state.token = '';
                },
            );
    },
});

export const { logOut, setAuth } = authSlice.actions;
//middleware для полного выхода из системы, с удалением из localStorage
export const totalLogOut = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('user-token');
    dispatch(logOut());
};
export default authSlice.reducer;
