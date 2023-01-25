import styled from '@emotion/styled';
import { style } from '@mui/system';

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;

export const DialogBox = styled.dialog`
  width: 35%;
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
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  position: fixed;
  right: 33.5%;
  background-color: #fca4be;
  border-radius: 100px;
  font-size: 16px;
  font-family: 'LINESeedKR-Rg';
  color: white;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;
