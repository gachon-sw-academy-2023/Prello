import styled from '@emotion/styled';
import { WrapperProps } from '../../Footer/Footer.types';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const DialogBox = styled.dialog`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const RowWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${(props) => props.ratio || 'auto'};
  text-align: center;

  img {
    float: right;
    width: 25px;
    height: 25px;
  }

  h1 {
    font-family: 'LINESeedKR-Rg';
    margin-bottom: 20px;
  }
`;

export const TextWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  justify-content: center;
`;

export const StyledText = styled.div`
  float: left;
  background-color: #e9f8f9;
  font-family: 'LINESeedKR-Rg';
  font-size: 12px;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const StyledTextRight = styled.div`
  float: right;
  font-family: 'LINESeedKR-Rg';
  font-size: 12px;
  padding: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #eaebf6;
  background-color: #f5f3f3;
  padding: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 0.5rem;
  font-family: 'LINESeedKR-Rg';
  font-size: 16px;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c0c3d0;
  }
`;
