import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
    private static baseURL = 'http://localhost:8080';

    private static async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios({
                baseURL: this.baseURL,
                ...config,
            });
            return response.data;
        } catch (error) {
            throw new Error(`API Error: ${error}`);
        }
    }

    private static getDefaultHeaders(): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `http://localhost:3000`,
        };

        const authToken = localStorage.getItem('token');
        if (authToken) {
            headers['Authorization'] = `Bearer ${authToken}`;
        }

        return headers;
    }

    static async get<T>(url: string, params?: any, additionalHeaders?: Record<string, string>[]): Promise<T> {
        const headers = Object.assign({}, this.getDefaultHeaders(), ...additionalHeaders || []);
        const config: AxiosRequestConfig = {
            method: 'get',
            url,
            params,
            headers,
        };
        return this.request<T>(config);
    }

    static async post<T>(url: string, data?: any, additionalHeaders?: Record<string, string>[]): Promise<T> {
        const headers = Object.assign({}, this.getDefaultHeaders(), ...additionalHeaders || []);
        const config: AxiosRequestConfig = {
            method: 'post',
            url,
            data,
            headers,
        };
        return this.request<T>(config);
    }

    static async put<T>(url: string, data?: any, additionalHeaders?: Record<string, string>[]): Promise<T> {
        const headers = Object.assign({}, this.getDefaultHeaders(), ...additionalHeaders || []);
        const config: AxiosRequestConfig = {
            method: 'put',
            url,
            data,
            headers,
        };
        return this.request<T>(config);
    }

    static async delete<T>(url: string, params?: any, additionalHeaders?: Record<string, string>[]): Promise<T> {
        const headers = Object.assign({}, this.getDefaultHeaders(), ...additionalHeaders || []);
        const config: AxiosRequestConfig = {
            method: 'delete',
            url,
            params,
            headers,
        };
        return this.request<T>(config);
    }
}

export default ApiService;