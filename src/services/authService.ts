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
    login: async (userCredentials: userCredentials): Promise<AuthResponse | null> => {
        return null;
    },
    logout: () => {

    }
}