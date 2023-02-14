import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.BASE_URL;

const request = axios.create({
  baseURL: BASE_URL,
});

request.defaults.timeout = 2500;

request.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.log(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const res = response;
    return res;
  },
  (error: AxiosError): Promise<AxiosError> => {
    switch (error.response?.status) {
      case 400:
        return Promise.reject(error);
      case 401:
        return Promise.reject(error);
      case 403:
        return Promise.reject(error);
      case 409:
        return Promise.reject(error);
      default:
        return Promise.reject(error);
    }
  },
);

export default request;
