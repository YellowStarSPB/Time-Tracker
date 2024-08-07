export type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    status: 'error' | 'success' | null;
    message: string;
    isLoading: boolean;
};

export type DataUser = {
    login: string;
    password: string;
};

export type RequestData = {
    endPoint: string;
    dataUser: DataUser;
};
export type RequestAuthorizationData = {
    endPoint: string;
    token: string;
};
export interface ResponseData {
    status: 'error' | 'success';
    message: string;
    token: string;
}
