import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL: string = process.env.REACT_APP_API_BASE_URL || 'https://fakestoreapi.com/';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => res,
    async (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;