import CircularLoading from '@/components/CirclularLoading/CircularLoading';
import SimpleModal from '@/components/Modals/SimpleModal/SimpleModal';
import { modalSelector } from '@/recoil/atom/modalSelector';
import { userSelector } from '@/recoil/atom/userSelector';
import ROUTES from '@/routes';
import request from '@/utils/api';
import { Default } from '@/utils/mediaQuery';
import { CircularProgress } from '@mui/material';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './styles';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useRecoilState(userSelector);
  const [modal, setModal] = useRecoilState(modalSelector);
  const [modalText, setModalText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchLogin();
  };

  const fetchLogin = async () => {
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };

    request
      .post('/api/v1/users/login', data)
      .then((res: AxiosResponse) => {
        console.log(res);
        setLoading(false);
        setModalText('로그인이 완료되었습니다! 💖');
        handleModal();
        console.log(modalText);
        setUser(res.data.user);
        console.log(user);

        setTimeout(() => navigate(ROUTES.MAIN), 1000);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
      });
  };

  const handleModal = () => {
    const data = {
      isOpen: !modal.isOpen,
      text: '로그인이 완료되었습니다! 💖',
    };
    setModal(data);
  };

  return (
    <S.Container>
      {loading && <CircularLoading />}
      {modal.isOpen && (
        <SimpleModal onClickToggleModal={handleModal}>{modal.text}</SimpleModal>
      )}
      <Default>
        <S.LeftWrapper>
          <S.Img />
        </S.LeftWrapper>
      </Default>
      <S.RightWrapper>
        <S.Header>
          <Default>
            <S.HeaderWrapper>
              <S.BackBtn onClick={() => navigate(-1)}>
                <img />
                <span>Back</span>
              </S.BackBtn>
              <p>
                <span>I want to have an account!</span>
                <S.StyledText
                  onClick={() => {
                    navigate(ROUTES.SIGNUP);
                  }}
                >
                  Sign Up
                </S.StyledText>
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
              required
              data-testid="email"
            ></S.InputEmail>
            <S.BlankDiv />

            <label>Password</label>
            <S.InputPwd
              type="password"
              value={password}
              placeholder="Type here"
              onChange={handleChangePassword}
              required
              data-testid="password"
            ></S.InputPwd>
            <S.BlankDiv />

            <S.SubmitBtn
              type="submit"
              color="gradient"
              radius="circle"
              width={160}
              data-testid="submit"
            >
              Login
            </S.SubmitBtn>
          </S.Form>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Login;
