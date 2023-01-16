import { emailRegex, pwdRegex } from '@/utils/authorization';
import React, { useState, useCallback } from 'react';
import Modal from './modal';
import * as S from './styles';

export default function SignUp() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [pwdValidation, setPwdValidation] = useState(true);
  const [password, setPassword] = useState('');
  const [pwdConfirmValidation, setPwdConfirmValidation] = useState(true);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(emailRegex)) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };

  const pwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(pwdRegex)) {
      setPwdValidation(false);
    } else {
      setPwdValidation(true);
    }
    setPassword(e.target.value);
  };

  const pwdConfirmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      setPwdConfirmValidation(false);
    } else {
      setPwdConfirmValidation(true);
    }
  };
  return (
    <S.Container>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          ✉️ 이메일이 발송되었습니다. 메일함을 확인해주세요
        </Modal>
      )}
      <S.LeftWrapper>
        <S.CoverImg />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Header>
          <S.BackBtn>
            <S.BackImg />
            <span>Back</span>
          </S.BackBtn>
          <p>
            <span>I have an account!</span>
            <S.Sspan>Login</S.Sspan>
          </p>
        </S.Header>

        <S.Content>
          <S.Title>Sign Up</S.Title>

          <S.SignUpForm>
            <label>Email</label>
            <S.InputEmail
              type="text"
              placeholder="Type here"
              onBlur={emailInput}
            ></S.InputEmail>
            <S.Warning>
              <p hidden={emailValidation}>이메일 형식을 확인해주세요.</p>
            </S.Warning>

            <label>Password</label>
            <S.InputPwd type="password" onBlur={pwdInput}></S.InputPwd>
            <S.Warning>
              <p hidden={pwdValidation}>
                영어/숫자/특수문자를 조합하여 8자리 이상 입력해주세요.
              </p>
            </S.Warning>

            <label>Password Confirm</label>
            <S.InputPwd type="password" onBlur={pwdConfirmInput}></S.InputPwd>
            <S.Warning>
              <p hidden={pwdConfirmValidation}>
                입력한 비밀번호와 일치하지 않습니다.
              </p>
            </S.Warning>

            <label>Nickname</label>
            <S.InputNickname type="text"></S.InputNickname>
            <S.Warning>
              <p hidden={true}>
                사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.
              </p>
            </S.Warning>

            <S.SubmitBtn
              type="submit"
              color="gradient"
              radius="circle"
              onClick={onClickToggleModal}
            >
              DONE
            </S.SubmitBtn>
          </S.SignUpForm>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}
