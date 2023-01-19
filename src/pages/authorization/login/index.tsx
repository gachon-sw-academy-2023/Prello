import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import routes from '@/routes';
import { useIndexedDB } from 'react-indexed-db';
import { pwdRegex } from '@/utils/checkPassword';
import { emailRegex } from '@/utils/checkEmail';
import { Default, Mobile } from '@/utils/mediaQuery';
function Login() {
  const [login, setLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailValidation, setEmailValidation] = useState<boolean>(true);
  const [pwdValidation, setPwdValidation] = useState<boolean>(true);
  const navigate = useNavigate();
  const { getByIndex } = useIndexedDB('user');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
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
    console.log(email);
    console.log(password);
    if (emailValidation && pwdValidation) {
      fetch('/login', {
        method: 'post',
      }).then((res) => {
        if (res.status === 200) {
          setLogin(true);
          getByIndex('email', email)
            .then(
              (personFromDB) => {
                console.log(personFromDB);
              },
              (error) => {
                console.log(error);
              },
            )
            .catch((error) => console.log(error));
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
      <Default>
        <S.LeftWrapper>
          <S.Img />
        </S.LeftWrapper>
      </Default>
      <S.RightWrapper>
        <S.Header>
          <Default>
            <S.HeaderWrapper>
              <S.BackBtn>
                <img />
                <span>Back</span>
              </S.BackBtn>
              <p>
                <span>I want to have an account!</span>
                <S.StyledText>Sign Up</S.StyledText>
              </p>
            </S.HeaderWrapper>
          </Default>
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
            <S.BlankDiv />

            <label>Password</label>
            <S.InputPwd
              type="password"
              value={password}
              onChange={handleChangePassword}
              onBlur={pwdInput}
              required
            ></S.InputPwd>
            <S.BlankDiv />

            <Default>
              <S.SubmitBtn
                type="submit"
                color="gradient"
                radius="circle"
                height="md"
                width={150}
              >
                Sign In
              </S.SubmitBtn>
            </Default>

            <Mobile>
              <S.SubmitBtn
                type="submit"
                color="gradient"
                radius="circle"
                height="md"
                width={160}
                style={{ whiteSpace: 'nowrap' }}
              >
                Sign In
              </S.SubmitBtn>
            </Mobile>
          </S.Form>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Login;
