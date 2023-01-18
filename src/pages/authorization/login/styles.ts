import Button from '@/components/Button/Button';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: linear-gradient(to bottom, #fca4be 0%, #e5a4fc 100%);
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 85%;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackBtn = styled.div`
  display: flex;
  align-items: center;
  img {
    content: url('assets/authorization/login/arrow-right.png');
    width: 18px;
    margin-right: 8px;
  }
`;

export const StyledText = styled.span`
  color: #553bf1;
  margin-left: 5px;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;

  label {
    width: 50%;
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: 75%;
  content: url('assets/authorization/login/cover.png');
`;

export const InputEmail = styled.input`
  width: 50%;
  color: rgb(36, 35, 42);
  font-size: 16px;
  line-height: 20px;
  min-height: 28px;
  border-radius: 2rem;
  padding: 8px 40px;
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

export const InputPwd = styled.input`
  width: 50%;
  color: rgb(36, 35, 42);
  font-size: 16px;
  line-height: 20px;
  min-height: 28px;
  border-radius: 2rem;
  padding: 8px 40px;
  border: 1px solid #eaebf6;
  transition: all 0.1s ease 0s;
  background: url('assets/authorization/login/padlock.png') no-repeat left;
  background-size: 16px;
  background-position: 10px 10px;
  :focus {
    border: 1.5px solid #e5a4fc;
  }
  ::placeholder {
    color: #c0c3d0;
  }
`;

export const Warning = styled.div`
  display: flex;
  width: 50%;
  color: tomato;
  margin: 10px 0px 20px 0px;
  font-size: 12px;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 5px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
`;
