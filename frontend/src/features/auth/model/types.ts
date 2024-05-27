export type AuthState = {
    isAuthenticated: boolean;
    token: string;
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
export interface ResponseData {
    status: 'error' | 'success';
    message: string;
    token: string;
}

