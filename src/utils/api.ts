import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.BASE_URL;

const request = axios.create({
  baseURL: BASE_URL,
});

request.defaults.timeout = 2500;

export default request;
