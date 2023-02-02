import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import * as S from './CreateModal.style';
import axios from 'axios';
import { userSelector } from '@/recoil/atom/userSelector';
import { useRecoilState } from 'recoil';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const CreateWorkspace = (props: any) => {
  const [user, setUser] = useRecoilState(userSelector);
  const [errorText, setErrorText] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [inviteBtnStatus, setInviteBtnStatus] = useState<boolean>(true);
  const [emailList, setEmailList] = useState<string[]>([]);

  const handleModal = () => {
    props.setOpenModal(false);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setInviteBtnStatus(false);
  };
  const handleInvite = () => {
    if (newEmail !== '' && !emailList.includes(newEmail)) {
      setEmailList(emailList.concat(newEmail));
      setInviteBtnStatus(true);
      setNewEmail('');
    }
  };
  const handleDelete = (chipToDelete: string) => () => {
    setEmailList((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleCreate = () => {
    if (name.length === 0 || summary.length === 0) {
      setErrorText('워크스페이스 이름 및 설명을 입력해주세요!');
    } else {
      patchCreate();
    }
  };

  const patchCreate = async () => {
    let info = {
      owner: user.email,
      name: name,
      summary: summary,
      memberInfo: emailList,
    };
    try {
      const response = await axios.post('/workspace/create', info);
      if (response.status === 200) {
        props.setOpenModal(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Modal size="lg" onClickToggleModal={handleModal}>
      <S.MainWrapper>
        <S.colWrapper ratio={75}>
          <S.StyledInput
            type="text"
            value={name}
            placeholder="워크스페이스 이름을 입력해주세요."
            onChange={handleChangeName}
            className="main"
          ></S.StyledInput>
          <S.StyledInput
            type="text"
            value={summary}
            placeholder="설명을 입력해주세요."
            onChange={handleChangeSummary}
            className="sub"
          ></S.StyledInput>
        </S.colWrapper>
      </S.MainWrapper>
      <S.SubWrapper>
        <S.StyledText>멤버 초대하기</S.StyledText>
        <S.StyledText className="sub">
          초대할 팀원의 이메일을 적어주세요.
        </S.StyledText>
        <S.InviteWrapper>
          <S.StyledEmailInput
            type="text"
            value={newEmail}
            onChange={handleChangeEmail}
          ></S.StyledEmailInput>
          <S.InviteBtn onClick={handleInvite} disabled={inviteBtnStatus}>
            초대 이메일 전송
          </S.InviteBtn>
        </S.InviteWrapper>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            listStyle: 'none',
            flexWrap: 'wrap',
            p: 0.5,
            m: 0,
          }}
        >
          {emailList.map((data) => {
            return (
              <ListItem key={data}>
                <Chip
                  sx={{ backgroundColor: '#E9F8F9', p: 1 }}
                  label={data}
                  onDelete={handleDelete(data)}
                />
              </ListItem>
            );
          })}
        </Paper>
        <S.BtnWrapper>
          <Button
            width={50}
            radius={'rounded'}
            color={'primary'}
            shadow={true}
            onClick={handleCreate}
          >
            워크스페이스 생성
          </Button>
          <S.StyledText className="error">{errorText}</S.StyledText>
        </S.BtnWrapper>
      </S.SubWrapper>
    </Modal>
  );
};

export default CreateWorkspace;
