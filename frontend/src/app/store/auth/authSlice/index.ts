import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
    id: number | null;
    login: string;
    token: string;
};

type InitialStateType = {
    user: UserType;
    status: 'error' | 'success' | '';
    isLoading: boolean;
    message: string;
};

type DataType = {
    endPoint: string;
    dataUser: string;
};
type ErrorFetch = {
    status: 'error' | 'success' | '';
    message: string;
};
type SuccessFetch = {
    status: 'error' | 'success' | '';
    message: string;
    userData: UserType;
};

const initialState: InitialStateType = {
    user: getInitialStateFromLocalStorage(),
    status: '',
    isLoading: false,
    message: '',
};

// Function to read from localStorage
function getInitialStateFromLocalStorage(): UserType {
    const storedState = localStorage.getItem('user');
    return storedState
        ? JSON.parse(storedState)
        : {
              id: null,
              login: '',
              token: '',
          };
}

export const fetchUser = createAsyncThunk(
    '@@login',
    async ({ endPoint, dataUser }: DataType, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:4444/${endPoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: dataUser,
            });

            const dataJson = await res.json();
            if (!res.ok) {
                return rejectWithValue(dataJson);
            }
            //перекидываем пользователя на главный экран приложения и записывам в хранилище данные
            if (dataJson.status === 'success') {
                localStorage.setItem('user', JSON.stringify(dataJson.userData));
            }
            return dataJson;
        } catch (error) {
            return error;
        }
    },
);

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            console.log(state, action);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<SuccessFetch>) => {
                    state.isLoading = false;
                    state.status = action.payload.status;
                    state.message = action.payload.message;
                    state.user = action.payload.userData;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                    // state.status = '';
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action: PayloadAction<ErrorFetch>) => {
                    state.isLoading = false;
                    state.status = action.payload.status;
                    state.message = action.payload.message;
                    state.user = initialState.user;
                },
            );
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
