import Button from '@/components/Button/Button';
import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import routes from '@/routes';
import { emailRegex, pwdRegex } from '@/utils/authorization';

function Login() {
  const [login, setLogin] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [pwdValidation, setPwdValidation] = useState(true);
  const navigate = useNavigate();

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(emailRegex) || e.target.value === null) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };

  const pwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(pwdRegex) || e.target.value === null) {
      setPwdValidation(false);
    } else {
      setPwdValidation(true);
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch('/login', {
      method: 'post',
    }).then((res) => {
      if (res.status === 200) {
        setLogin(true);
      }
    });
  };
  useEffect(() => {
    if (login && emailValidation && pwdValidation) {
      navigate(routes.WORKSPACEDEFAULT);
    }
  });
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.Img />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Header>
          <S.BackBtn>
            <img />
            <span>Back</span>
          </S.BackBtn>
          <p>
            <span>I want to have an account!</span>
            <S.StyledText>Sign Up</S.StyledText>
          </p>
        </S.Header>

        <S.Content>
          <S.Ttile>LOGIN</S.Ttile>

          <S.Form onSubmit={handleSubmit}>
            <label>Email</label>
            <S.InputEmail
              type="text"
              placeholder="Type here"
              onBlur={emailInput}
              required
            ></S.InputEmail>
            <S.Warning>
              <p hidden={emailValidation}>이메일 형식을 확인해주세요.</p>
            </S.Warning>

            <label>Password</label>
            <S.InputPwd type="password" onBlur={pwdInput} required></S.InputPwd>
            <S.Warning>
              <p hidden={emailValidation}>
                영어/숫자/특수문자를 조합하여 8자리 이상 입력해주세요.
              </p>
            </S.Warning>

            <Button type="submit" color="gradient" radius="circle">
              Sign In
            </Button>
          </S.Form>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Login;
