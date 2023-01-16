import Button from '@/components/Button/Button';
import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import routes from '@/routes';

function Login() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
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
    if (login) {
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
              required
            ></S.InputEmail>

            <label>Password</label>
            <S.InputPwd type="password" required></S.InputPwd>

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
