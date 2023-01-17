import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import routes from '@/routes';
import { emailRegex, pwdRegex } from '@/utils/authorization';
import { useIndexedDB } from 'react-indexed-db';
function Login() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);
  const [pwdValidation, setPwdValidation] = useState(true);
  const navigate = useNavigate();

  const { add } = useIndexedDB('people');
  const [person, setPerson] = useState();
  const { clear } = useIndexedDB('people');

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value.match(emailRegex) || e.target.value === null) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const pwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value.match(pwdRegex) || e.target.value === null) {
      setPwdValidation(false);
    } else {
      setPwdValidation(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (emailValidation && pwdValidation) {
      fetch('/login', {
        method: 'post',
      }).then((res) => {
        if (res.status === 200) {
          setLogin(true);
          add({ name: email, email: password }).then(
            (event) => {
              console.log('ID Generated: ', event);
            },
            (error) => {
              console.log(error);
            },
          );
        }
      });
    }
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
          <S.Title>LOGIN</S.Title>

          <S.Form onSubmit={handleSubmit}>
            <label>Email</label>
            <S.InputEmail
              type="text"
              value={email}
              placeholder="Type here"
              onChange={handleChangeEmail}
              onBlur={emailInput}
              required
            ></S.InputEmail>
            <S.Warning>
              <p hidden={emailValidation}>이메일 형식을 확인해주세요.</p>
            </S.Warning>

            <label>Password</label>
            <S.InputPwd
              type="password"
              value={password}
              onChange={handleChangePassword}
              onBlur={pwdInput}
              required
            ></S.InputPwd>
            <S.Warning>
              <p hidden={pwdValidation}>
                영어/숫자/특수문자를 조합하여 8자리 이상 입력해주세요.
              </p>
            </S.Warning>

            <S.SubmitBtn
              type="submit"
              color="gradient"
              radius="circle"
              height="md"
              width={160}
            >
              Sign In
            </S.SubmitBtn>
          </S.Form>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Login;
