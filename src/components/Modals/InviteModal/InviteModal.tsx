import SubTitle from '@/components/SubTitle/SubTitle';
import { modalSelector } from '@/recoil/atom/modalSelector';
import { InviteMembersProps } from '@/utils/types';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Modal from '../../Modal/Modal';
import {
  InviteBtn,
  InviteWrapper,
  StyledEmailInput,
} from '../CreateModal/CreateModal.style';
import { DeleteButton, EmptyBox } from '../DeleteModal/DeleteModal.styles';
import * as S from './InviteModal.styles';

export default function InviteModal({
  workspaceId,
  fetchWorkspaces,
}: InviteMembersProps) {
  const [email, setEmail] = useState<string>('');
  const [emailList, setEmailList] = useState<string[]>([]);
  const [modal, setModal] = useRecoilState(modalSelector);
  const [inviteBtnStatus, setInviteBtnStatus] = useState<boolean>(true);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setInviteBtnStatus(false);
  };

  const handleInvite = () => {
    if (email !== '' && !emailList.includes(email)) {
      setEmailList(emailList.concat(email));
      setInviteBtnStatus(true);
      setEmail('');
    }
  };

  const handleModal = () => {
    const data = {
      isOpen: !modal.isOpen,
    };
    setModal(data);
  };

  const fetchInvite = async () => {
    const data = {
      id: parseInt(workspaceId),
      memberInfo: emailList,
    };

    try {
      const response = await axios.post('/workspace/update-member', data);

      if (response.status === 200) {
        alert('워크스페이스 정보가 업데이트 되었습니다!');
        handleModal();
        fetchWorkspaces();
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  return (
    <Modal onClickToggleModal={handleModal}>
      <S.RowWrapper ratio={20}>
        <SubTitle size="md">초대할 팀원의 이메일을 적어주세요.</SubTitle>
        <EmptyBox />
      </S.RowWrapper>
      <S.RowWrapper>
        {emailList.map((data) => {
          return (
            <S.TextWrapper key={data}>
              <S.StyledText>{data}</S.StyledText>
              <S.StyledTextRight>초대 완료</S.StyledTextRight>
            </S.TextWrapper>
          );
        })}
        <EmptyBox />
      </S.RowWrapper>
      <S.RowWrapper>
        <InviteWrapper>
          <StyledEmailInput
            type="text"
            value={email}
            onChange={handleChangeEmail}
          ></StyledEmailInput>
          <InviteBtn onClick={handleInvite} disabled={inviteBtnStatus}>
            {' '}
            초대
          </InviteBtn>
        </InviteWrapper>
        <EmptyBox />
      </S.RowWrapper>
      <DeleteButton
        shadow={true}
        color="primary"
        height="md"
        width={0}
        onClick={fetchInvite}
      >
        초대하기
      </DeleteButton>
    </Modal>
  );
}
