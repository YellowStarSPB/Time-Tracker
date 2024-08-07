import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { handleAuthentication } from '../api/authenticationApi';
import { AppDispatch } from '../../../app/store/store';
import { handleAuthorization } from '../api/authorizationApi';

const initialState: AuthState = {
    isAuthenticated: false,
    token: checkLocalToken(),
    status: null,
    message: '',
    isLoading: false,
};

function checkLocalToken() {
    const storedToken = localStorage.getItem('user-token');
    if (storedToken) {
        return JSON.parse(storedToken);
    } else {
        return '';
    }
}

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isAuthenticated = false;
            state.token = '';
        },
        setAuth: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = JSON.parse(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleAuthentication.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.status;
                state.message = action.payload.message;
                state.token = action.payload.token;
            })
            .addCase(handleAuthentication.pending, (state) => {
                state.isLoading = true;
                state.message = '';
                state.status = null;
            })
            .addCase(handleAuthentication.rejected, (state, action) => {
                console.log(action.payload);
                if (action.payload) {
                    state.isLoading = false;
                    state.status = action.payload.status;
                    state.message = action.payload.message;
                    state.token = '';
                }
            });
        builder
            .addCase(handleAuthorization.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.token = action.payload.token;
            })
            .addCase(handleAuthorization.pending, (state) => {
                state.isAuthenticated = false
                // state.token = '';
            })
            .addCase(handleAuthorization.rejected, (state, action) => {
                console.log(action.payload);
                if (action.payload) {
                    state.status = action.payload.status;
                    state.message = action.payload.message;
                    state.token = '';
                }
            });
    },
});

export const { logOut, setAuth } = authSlice.actions;
//middleware для полного выхода из системы, с удалением из localStorage
export const totalLogOut = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('user-token');
    dispatch(logOut());
};
export default authSlice.reducer;
