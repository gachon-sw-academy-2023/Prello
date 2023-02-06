import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  position: fixed;
`;

export const LoadingText = styled.p`
  margin-top: 20px;
  font-family: 'LINESeedKR-Bd';
  color: white;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;
