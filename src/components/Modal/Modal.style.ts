import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ModalProps } from './Modal.types';

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
`;
export const DialogBox = styled.dialog<ModalProps>`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  ${({ size }) =>
    size === 'sm'
      ? css`
          width: 25%;
        `
      : size === 'md'
      ? css`
          width: 40%;
        `
      : css`
          width: 50%;
          padding: 40px 50px;
        `}
`;
export const CloseButton = styled.button<ModalProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  ${({ size }) =>
    size === 'lg'
      ? css`
          right: 4%;
        `
      : css`
          right: 16px;
        `}
  background-color: #fca4be;
  border-radius: 100px;
  font-size: 16px;
  font-family: 'LINESeedKR-Rg';
  color: white;
  border: none;
`;
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;
