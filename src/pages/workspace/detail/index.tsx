import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import InviteModal from '@/components/Modals/InviteModal/InviteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface IMember {
  name: string;
  profile: string;
}
let members: IMember[] = [
  {
    name: 'dahye',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'leah',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'rylee',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버1',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버2',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버3',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버4',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버5',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버6',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버7',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버8',
    profile: '/assets/workspace/sample-profile-image.png',
  },
];
interface IBoard {
  title: string;
}
let boards: IBoard[] = [
  {
    title: 'First Board',
  },
  {
    title: 'Second Board',
  },
];

export default function WorkspaceDetail() {
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleNavigate = () => {
    navigate('/workspace-setting');
  };

  const handleCreate = () => {
    boards.push({ title: '' });
    console.log(boards);
  };

  useEffect(() => {}, [handleCreate]);

  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={true}
          children="Workspace"
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="public/assets/authorization/pimfy_profile.png" />
      </Mobile>
      {isOpenModal && <InviteModal setOpenModal={setOpenModal}></InviteModal>}
      <S.Wrapper>
        <SideBar
          memberInfo={members}
          onModal={handleModal}
          onNavigate={handleNavigate}
        />
        <S.RightContainer>
          <S.InfoContainer>
            <WorkspaceImg
              radius="none"
              image="/assets/authorization/pimfy_profile.png"
            />
            <S.InfoContents>
              <SubTitle size="md">PIMPY</SubTitle>
              <S.ExplainText>핌피팀입니당</S.ExplainText>
            </S.InfoContents>
          </S.InfoContainer>
          <S.Line margin="0"></S.Line>
          <S.BoardContainer>
            <Grid container spacing={4}>
              {boards.map((board) => (
                <Grid item xs={12} sm={6} md={4} key={board.title}>
                  <S.Item center={false} color={'#ffe7ee'}>
                    <S.Title margin={'30px 20px'}>{board.title}</S.Title>
                  </S.Item>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={4}>
                <S.Item center={true} color={'#fffcff'} onClick={handleCreate}>
                  <S.Image
                    width={'50px'}
                    height={'50px'}
                    img={'/assets/workspace/sample-add-icon.png'}
                  ></S.Image>
                </S.Item>
              </Grid>
            </Grid>
          </S.BoardContainer>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
}
