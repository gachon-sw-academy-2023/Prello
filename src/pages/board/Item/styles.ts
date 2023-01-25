import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background-color: white;
  position: fixed;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 80%;
`;

export const Title = styled.div`
  height: 20%;
  background-color: pink;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const Comment = styled.div`
  background-color: lemonchiffon;
  width: 70%;
`;

export const Info = styled.div`
  background-color: skyblue;
  width: 30%;
`;
