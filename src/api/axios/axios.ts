import axios, { AxiosResponse } from 'axios';
import { baseURL } from '../config';

const axiosInstance = axios.create({
    baseURL,
});

interface ApiProps {
    get: (url: string, config?: object) => Promise<AxiosResponse>;
    delete: (url: string, config?: object) => Promise<AxiosResponse>;
    post: (
        url: string,
        body: object,
        config?: object
    ) => Promise<AxiosResponse>;
    put: (url: string, body: object, config?: object) => Promise<AxiosResponse>;
    patch: (
        url: string,
        body: object,
        config?: object
    ) => Promise<AxiosResponse>;
}

export default {
    get: (url, config = {}) => axiosInstance.get(url, config),
    delete: (url, config = {}) => axiosInstance.delete(url, config),
    post: (url, body, config = {}) => axiosInstance.post(url, body, config),
    put: (url, body, config = {}) => axiosInstance.put(url, body, config),
    patch: (url, body, config = {}) => axiosInstance.patch(url, body, config),
} as ApiProps;
