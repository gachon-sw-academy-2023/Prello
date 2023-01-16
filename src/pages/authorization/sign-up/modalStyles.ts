import styled from '@emotion/styled';
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  bottom: 50px;
`;

export const DialogBox = styled.dialog`
  width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #ffeef3;
  z-index: 10000;
`;
