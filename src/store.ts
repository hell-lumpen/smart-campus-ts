import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { authMiddleware } from './auth/authMiddleware';
import { authSlice} from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;