import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    AsyncThunk,
} from '@reduxjs/toolkit';

type UserType = {
    id: number;
    login: string;
    token: string;
};

type InitialStateType = {
    user: UserType;
    status: 'error' | 'success' | '';
    isLoading: boolean;
};

// Function to read from localStorage
const getInitialStateFromLocalStorage = (): UserType => {
    const storedState = localStorage.getItem('user');
    return storedState ? JSON.parse(storedState) : initialState;
};

const initialState: InitialStateType = {
    user: getInitialStateFromLocalStorage(),
    status: '',
    isLoading: false,
};

type DataType = {
    endPoint: string;
    dataUser: string;
};

const loginUser = createAsyncThunk(
    '@@login',
    async ({ endPoint, dataUser }: DataType) => {
        try {
            const res = await fetch(`http://localhost:4444/api/${endPoint}`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
);

const authSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            console.log(state, action);
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(state);
            })
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {},
            );
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
