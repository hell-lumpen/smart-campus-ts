import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from "../store";

interface User {
    id: number;
    username: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token') || null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string; password: string }) => {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        console.log(data.token);
        return data.token;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            console.log(action.payload);
            localStorage.setItem('token', action.payload);
        });
    },
});

// @ts-ignore
export const selectUser = (state: RootState) => state.auth.user;
// @ts-ignore
export const selectToken = (state: RootState) => state.auth.token;
export const { logout } = authSlice.actions;