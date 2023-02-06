import SubTitle from '@/components/SubTitle/SubTitle';
import { InviteMembersProps } from '@/utils/types';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import {
  DeleteButton,
  EmptyBox,
  RoundInput,
} from '../DeleteModal/DeleteModal.styles';
import * as S from './InviteModal.styles';

export default function InviteModal({ setOpenModal }: InviteMembersProps) {
  const [email, setEmail] = useState<string>();
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal onClickToggleModal={handleModal}>
      <S.RowWrapper ratio={20}>
        <SubTitle size="md">초대할 팀원의 이메일을 적어주세요.</SubTitle>
        <EmptyBox />
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
        <EmptyBox />
      </S.RowWrapper>
      <S.RowWrapper>
        <RoundInput
          type="text"
          value={email}
          placeholder="이메일"
          onChange={handleChangeEmail}
        ></RoundInput>
        <EmptyBox />
      </S.RowWrapper>
      <DeleteButton
        shadow={true}
        color="primary"
        height="md"
        width={0}
        onClick={handleModal}
      >
        초대하기
      </DeleteButton>
    </Modal>
  );
}
