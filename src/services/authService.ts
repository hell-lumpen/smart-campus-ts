import axios from "axios";

export interface userCredentials {
    login: string,
    password: string
}

interface AuthResponse {
    token: string
}

const API_BASE_URL = 'http://localhost/api/auth'

const authService = {
    login: async (userCredentials: userCredentials): Promise<string | null> => {
        try {
            const response = await axios.post<AuthResponse>(
                `${API_BASE_URL}/login`,
                userCredentials,
                {}
            );

            const { token } = response.data;

            return token;
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            return null;
        }
    },
    logout: () => {

    },

    register: () => {

    }
}