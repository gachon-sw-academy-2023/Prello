import { PropsWithChildren, useState } from 'react';
import Button from '../Button/Button';
import * as S from './InviteModal.styles';
import { InviteModalProps } from './InviteModal.types';

export default function InviteModal({
  onClickToggleModal,
}: PropsWithChildren<InviteModalProps>) {
  const [email, setEmail] = useState<string>();
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.RowWrapper ratio={10}>
          <img
            src="assets/images/main/button.png"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();

              if (onClickToggleModal) {
                onClickToggleModal();
              }
            }}
          ></img>
        </S.RowWrapper>
        <S.RowWrapper ratio={20}>
          <h1>초대할 팀원의 이메일을 적어주세요.</h1>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.TextWrapper>
            <S.StyledText>pimfy@gmail.com</S.StyledText>
            <S.StyledTextRight>이메일 발송 완료</S.StyledTextRight>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.StyledText>pimfy@gmail.com</S.StyledText>
            <S.StyledTextRight>이메일 발송 완료</S.StyledTextRight>
          </S.TextWrapper>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.StyledInput
            type="text"
            value={email}
            placeholder="이메일"
            onChange={handleChangeEmail}
          ></S.StyledInput>
        </S.RowWrapper>
        <S.RowWrapper ratio={20}>
          <Button
            height="lg"
            width={225}
            radius={'rounded'}
            color={'primary'}
            shadow={true}
          >
            워크스페이스 생성
          </Button>
        </S.RowWrapper>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}
