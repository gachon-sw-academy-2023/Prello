import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    font-weight: 600;
    opacity: 70%;
  }
`;

export const BackBtn = styled.div`
  cursor: pointer;
  margin-top: 25px;
  padding: 10px 40px;
  background-color: whitesmoke;
  border-radius: 20px;
`;

export const Logo = styled.h1`
  font-family: 'Rubik Bubbles', cursive;
  font-size: 25px;
  color: #fca4be;
  text-transform: uppercase;
`;
