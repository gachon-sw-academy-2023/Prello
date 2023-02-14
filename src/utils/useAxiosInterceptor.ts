import { modalSelector } from '@/recoil/atom/modalSelector';
import { AxiosError, AxiosResponse } from 'axios';
import { response } from 'msw';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import request from './api';

export const useAxiosInterceptor = () => {
  const [modal, setModal] = useRecoilState(modalSelector);
  const handleModal = (text: string) => {
    const data = {
      isOpen: !modal.isOpen,
      text: text,
    };
    setModal(data);
  };

  const errorHandler = (error: AxiosError) => {
    let msg = error.message;
  };

  const responseHandler = (response: AxiosResponse) => {
    return response;
  };

  const responseInterceptor = request.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      const res = response;
      return res;
    },
    (error: AxiosError): Promise<AxiosError> => {
      let errorText;
      switch (error.response?.status) {
        case 400:
          return Promise.reject(error);
        case 401:
          return Promise.reject(error);
        case 403:
          return Promise.reject(error);
        case 409:
          // 중복 이메일 에러 처리
          errorText = '중복된 이메일입니다! 다른 이메일로 가입해 주세요! ✋';
          handleModal(errorText);
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    },
  );

  useEffect(() => {
    return () => {
      request.interceptors.request.eject(responseInterceptor);
    };
  }, [responseInterceptor]);
};
