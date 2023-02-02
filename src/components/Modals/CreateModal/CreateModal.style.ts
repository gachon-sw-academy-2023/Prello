import styled from '@emotion/styled';
import colors from '@/styles/colors';

export type WrapperProps = {
  ratio: number;
};

export const MainWrapper = styled.div`
  width: 100%;
  height: 30%;
`;

export const SubWrapper = styled.div`
  width: 100%;
  height: 70%;
`;

export const colWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.ratio}%;
  height: 100%;
  float: left;

  div {
    background-color: blue;
    width: 100px;
    height: 100px;
  }

  img {
    float: right;
    width: 40%;
  }
`;

export const InviteWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c0c3d0;
  }

  &.main {
    font-family: 'LINESeedKR-Bd';
    font-size: 20px;
    height: 50%;
    margin-bottom: 10px;
  }

  &.sub {
    font-family: 'LINESeedKR-Rg';
    font-size: 16px;
    height: 40%;
  }
`;

export const StyledText = styled.h1`
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: 'LINESeedKR-Bd';
  align-items: center;
  font-size: 14px;

  &.sub {
    font-family: 'LINESeedKR-Rg';
  }
  &.error {
    color: red;
  }
`;

export const StyledEmailInput = styled.input`
  width: 80%;
  color: rgb(36, 35, 42);
  font-size: 16px;
  line-height: 20px;
  min-height: 28px;
  border-radius: 0.5rem;
  padding: 8px 40px;
  margin-top: 10px;
  border: 1px solid #eaebf6;
  transition: all 0.1s ease 0s;
  background: url('assets/authorization/login/email.png') no-repeat left;
  background-size: 16px;
  background-position: 10px 10px;
  :focus {
    border: 1.5px solid #e5a4fc;
  }
  ::placeholder {
    color: #c0c3d0;
  }
`;

export const InviteBtn = styled.button`
  width: 19%;
  min-height: 35px;
  border-radius: 0.5rem;
  margin-left: 1%;
  background-color: #fca4be;
  color: white;
  font-family: 'LINESeedKR-Rg';
  :disabled {
    background-color: lightgray;
  }
`;
