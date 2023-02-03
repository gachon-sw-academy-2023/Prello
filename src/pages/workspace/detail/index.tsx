import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import InviteModal from '@/components/Modals/InviteModal/InviteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import axios from 'axios';

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
  id: number;
  title: string;
  workspaceId: number;
}

export default function WorkspaceDetail() {
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [newItem, setNewItem] = useState<boolean>(false);
  const [boards, setBoards] = useState<IBoard[]>([]);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleNavigate = () => {
    navigate('/workspace-setting');
  };

  const handleCreate = () => {
    setNewItem(true);
  };

  const fetchCreate = async () => {
    let info = {
      workspaceId: 1,
      name: title,
    };
    if (title.length > 0) {
      try {
        const response = await axios.post('/board/create', info);
        if (response.status === 200) {
          console.log('저장완료', info);
        }
      } catch (error: any) {
        console.log(error);
      }
      setTitle('');
      setNewItem(false);
    }
  };
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const fetchBoardList = async () => {
    try {
      const response = await axios.get('/board/list');
      if (response.status === 200) {
        console.log(response.data);
        setBoards(response.data);
      }
    } catch (error: any) {
      // setError(error);
      console.log(error);
    }
    console.log('보드', boards);
    // setLoading(false);
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

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
              <Grid item xs={12} sm={6} md={4}>
                <S.Item center={true} color={'#fffcff'} onClick={handleCreate}>
                  <S.Image
                    width={'50px'}
                    height={'50px'}
                    img={'/assets/workspace/sample-add-icon.png'}
                  ></S.Image>
                </S.Item>
              </Grid>
              {boards.map((board) => (
                <Grid item xs={12} sm={6} md={4} key={board.id}>
                  <S.Item center={false} color={'#ffe7ee'}>
                    <S.TitleInput
                      value={board.title}
                      disabled={true}
                    ></S.TitleInput>
                  </S.Item>
                </Grid>
              ))}
              {newItem && (
                <Grid item xs={12} sm={6} md={4}>
                  <S.Item center={false} color={'#ffe7ee'}>
                    <S.TitleInput
                      placeholder="보드 이름을 입력해주세요"
                      defaultValue={title}
                      onChange={handleChangeTitle}
                    ></S.TitleInput>
                    <S.BtnWrapper>
                      <S.SaveBtn color="primary" onClick={fetchCreate}>
                        생성하기
                      </S.SaveBtn>
                    </S.BtnWrapper>
                  </S.Item>
                </Grid>
              )}
            </Grid>
          </S.BoardContainer>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
}
