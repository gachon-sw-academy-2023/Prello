import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.BASE_URL;

console.log(BASE_URL);

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
    if (error.response?.status === 409) {
      // 409 에러 처리
    } else if (error.response?.status === 500) {
      // 500 에러 처리
    }

    console.log(error);
    return Promise.reject(error);
  },
);

export default request;
