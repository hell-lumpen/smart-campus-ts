import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from './authApi';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const [loginMutation] = useLoginMutation();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await loginMutation(credentials).unwrap();
            // Обработка успешного входа
        } catch (error) {
            // Обработка ошибки входа
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <p>Please login:</p>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;