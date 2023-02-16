import { statusSelector } from '@/recoil/atom/statusSelector';
import { modalSelector } from '@/recoil/atom/modalSelector';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import request from './api';

export const useAxiosInterceptor = () => {
  const [modal, setModal] = useRecoilState(modalSelector);
  const [status, setStatus] = useRecoilState(statusSelector);
  const handleModal = (text: string) => {
    const data = {
      isOpen: !modal.isOpen,
      text: text,
    };
    setModal(data);
  };
  const handleError = () => {
    const data = {
      isError: true,
      isLoading: false,
    };
    setStatus(data);
  };

  const requestInterceptor = request.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const data = {
        isError: false,
        isLoading: true,
      };
      setStatus(data);
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  const responseInterceptor = request.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      const res = response;
      const data = {
        isError: status.isError,
        isLoading: false,
      };
      setStatus(data);
      return res;
    },
    (error: AxiosError): Promise<AxiosError> => {
      let errorText;
      switch (error.response?.status) {
        case 400:
          errorText = '가입된 이메일이 아닙니다. 먼저 가입해 주세요! ✋';
          handleModal(errorText);
          return Promise.reject(error);
        case 401:
          errorText = '비밀번호가 틀렸습니다. 다시 시도해주세요! 😂';
          handleModal(errorText);
          return Promise.reject(error);
        case 403:
          return Promise.reject(error);
        case 409:
          errorText = '중복된 이메일입니다! 다른 이메일로 가입해 주세요! ✋';
          handleModal(errorText);
          return Promise.reject(error);
        default:
          handleError();
          return Promise.reject(error);
      }
    },
  );

  useEffect(() => {
    return () => {
      request.interceptors.request.eject(requestInterceptor);
      request.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
