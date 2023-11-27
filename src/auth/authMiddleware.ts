import { Middleware } from 'redux';
import { login } from './authSlice';

export const authMiddleware: Middleware = (store) => (next) => async (action) => {
    if (login.fulfilled.match(action)) {
        console.log(action.payload);
    }

    return next(action);
};
