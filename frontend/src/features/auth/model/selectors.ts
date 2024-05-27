import { RootState } from '../../../app/store/store';
import { AuthState } from './types';

export const selectToken = (state: RootState): AuthState['token'] => state.auth.token;
export const selectIsAuthenticated = (state: RootState): AuthState['isAuthenticated'] =>
    state.auth.isAuthenticated;
