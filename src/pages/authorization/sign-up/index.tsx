import SimpleModal from '@/components/Modals/SimpleModal/SimpleModal';
import ROUTES from '@/routes';
import { emailRegex } from '@/utils/checkEmail';
import { pwdRegex } from '@/utils/checkPassword';
import { Default } from '@/utils/mediaQuery';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [emailValidation, setEmailValidation] = useState<boolean>(true);
  const [pwdValidation, setPwdValidation] = useState<boolean>(true);
  const [pwdConfirmValidation, setPwdConfirmValidation] =
    useState<boolean>(true);
  const [nicknameValidation, setNicknameValidation] = useState<boolean>(true);

  const navigate = useNavigate();

  function handleSubmit() {
    if (
      emailValidation &&
      pwdValidation &&
      pwdConfirmValidation &&
      nicknameValidation
    ) {
      patchSignUp();
    } else {
      setModalText('입력 조건을 확인해주세요!');
      handleModal();
    }
  }

  const patchSignUp = async () => {
    const user = {
      email: email,
      password: password,
      nickname: nickname,
    };

    try {
      const response = await axios.post('/sign-up', user);
      if (response.status === 200) {
        setModalText('회원가입이 완료되었습니다! 💖');
        handleModal();
        setTimeout(() => navigate(ROUTES.LOGIN), 1000);
      }
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 409) {
        console.log(err.response?.data);
        setModalText('중복된 이메일입니다! 다른 이메일로 가입해 주세요! ✋');
        handleModal();
      }
      if (err.response?.status === 500) {
        console.log(err.response?.data);
        setModalText('오류가 발생했습니다. 다시 시도해 주세요!');
        handleModal();
      }
    }
  };

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(emailRegex)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const pwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(pwdRegex)) {
      setPwdValidation(true);
    } else {
      setPwdValidation(false);
    }
  };

  const pwdConfirmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      setPwdConfirmValidation(false);
    } else {
      setPwdConfirmValidation(true);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.match(pwdRegex)) {
      setPwdValidation(true);
    } else {
      setPwdValidation(false);
    }
  };

  const handleChangePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordConfirm(e.target.value);
  };

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (e.target.value.length >= 2 && e.target.value.length <= 8) {
      setNicknameValidation(true);
    } else {
      setNicknameValidation(false);
    }
  };

  return (
    <S.Container>
      {isOpenModal && (
        <SimpleModal onClickToggleModal={handleModal}>{modalText}</SimpleModal>
      )}
      <Default>
        <S.LeftWrapper>
          <S.CoverImg />
        </S.LeftWrapper>
      </Default>
      <S.RightWrapper>
        <S.Header>
          <Default>
            <S.HeaderWrapper>
              <S.BackBtn onClick={() => navigate(-1)}>
                <S.BackImg />
                <span>Back</span>
              </S.BackBtn>
              <p>
                <span>I have an account!</span>
                <S.Sspan
                  onClick={() => {
                    navigate(ROUTES.LOGIN);
                  }}
                >
                  Login
                </S.Sspan>
              </p>
            </S.HeaderWrapper>
          </Default>
        </S.Header>

        <S.Content>
          <S.Title>Sign Up</S.Title>

          <S.SignUpForm>
            <label>Email</label>
            <S.InputEmail
              type="text"
              placeholder="Type here"
              onChange={handleChangeEmail}
              onBlur={emailInput}
              data-testid="email"
            ></S.InputEmail>
            <S.Warning>
              <p hidden={emailValidation}>이메일 형식을 확인해주세요.</p>
            </S.Warning>

            <label>Password</label>
            <S.InputPwd
              type="password"
              placeholder="Type here"
              onChange={handleChangePassword}
              onBlur={pwdInput}
              data-testid="password"
            ></S.InputPwd>
            <S.Warning>
              <p hidden={pwdValidation}>
                영어/숫자/특수문자를 조합하여 8자리 이상 입력해주세요.
              </p>
            </S.Warning>

            <label>Password Confirm</label>
            <S.InputPwd
              type="password"
              placeholder="Type here"
              onChange={handleChangePasswordConfirm}
              onBlur={pwdConfirmInput}
              data-testid="passwordConfirm"
            ></S.InputPwd>
            <S.Warning>
              <p hidden={pwdConfirmValidation}>
                입력한 비밀번호와 일치하지 않습니다.
              </p>
            </S.Warning>

            <label>Nickname</label>
            <S.InputNickname
              type="text"
              placeholder="Type here"
              onChange={handleChangeNickname}
              data-testid="nickname"
            ></S.InputNickname>
            <S.Warning>
              <p hidden={nicknameValidation}>
                2자리 이상, 8자리 이하로 입력해주세요.
              </p>
            </S.Warning>

            <S.SubmitBtn
              type="submit"
              color="gradient"
              radius="circle"
              onClick={handleSubmit}
              width={160}
              data-testid="submit"
              disable={
                !(
                  email.length > 0 &&
                  password.length > 0 &&
                  passwordConfirm.length > 0 &&
                  nickname.length > 0
                )
              }
            >
              Done
            </S.SubmitBtn>
          </S.SignUpForm>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}
