import BoardItem from '@/components/BoardItem/BoardItem';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import InviteModal from '@/components/Modals/InviteModal/InviteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import Inform from '@/pages/util';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailSkeleton from './skeleton';
import * as S from './styles';

// TODO: member 불러오는 api로 대체
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
export interface IBoard {
  id: number;
  name: string;
  workspaceId: number;
}

export default function WorkspaceDetail() {
  const navigate = useNavigate();
  const { workspaceId } = useParams() as { workspaceId: string };
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [workspaceSummary, setWorkspaceSummary] = useState<string>('');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isTitleExsit, setIsTitleExsit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [newItem, setNewItem] = useState<boolean>(false);
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleNavigate = (param: string) => {
    navigate(`/workspace-setting/${param}`);
  };
  const handleCreate = () => {
    setNewItem(true);
  };
  const handleDelete = () => {};
  const updateBoard = () => {};
  const fetchCreate = async () => {
    let info = {
      workspaceId: workspaceId,
      name: title,
    };
    if (title.length > 0) {
      try {
        const response = await axios.post('/board/create', info);
        if (response.status === 200) {
          console.log('저장완료', info);
        }
      } catch (error) {
        setError(true);
        throw error;
      }
      setTitle('');
      setNewItem(false);
      fetchBoardList();
    }
  };
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value.length > 0) {
      setIsTitleExsit(true);
    } else {
      setIsTitleExsit(false);
    }
  };
  const fetchWorkspaceInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/workspace/detail', {
        params: {
          workspaceId: workspaceId,
        },
      });
      if (response.status === 200) {
        setWorkspaceName(response.data.name);
        setWorkspaceSummary(response.data.summary);
      }
    } catch (error) {
      setError(true);
      throw error;
    }
    setLoading(false);
  };
  const fetchBoardList = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/board/list', {
        params: {
          workspaceId: workspaceId,
        },
      });
      if (response.status === 200) {
        setBoards(response.data);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWorkspaceInfo();
    fetchBoardList();
  }, []);

  if (error)
    return (
      <Inform message="알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!"></Inform>
    );

  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={true}
          children="Workspace"
          profileImg="/assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="/assets/authorization/pimfy_profile.png" />
      </Mobile>
      {isOpenModal && <InviteModal setOpenModal={setOpenModal}></InviteModal>}

      <S.Wrapper>
        <SideBar
          memberInfo={members}
          onModal={handleModal}
          onNavigate={() => handleNavigate(workspaceId)}
        />
        {loading ? (
          <DetailSkeleton />
        ) : (
          <S.RightContainer>
            <S.InfoContainer>
              <WorkspaceImg
                radius="none"
                image="/assets/authorization/pimfy_profile.png"
              />
              <S.InfoContents>
                <SubTitle size="md">{workspaceName}</SubTitle>
                <S.ExplainText>{workspaceSummary}</S.ExplainText>
              </S.InfoContents>
            </S.InfoContainer>
            <S.Line margin="0"></S.Line>
            <S.BoardContainer>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <S.Item
                    center={true}
                    color={'#fffcff'}
                    onClick={handleCreate}
                  >
                    <S.Image
                      width={'50px'}
                      height={'50px'}
                      img={'/assets/workspace/sample-add-icon.png'}
                    ></S.Image>
                  </S.Item>
                </Grid>
                {boards.map((board) => (
                  // <Grid item xs={12} sm={6} md={4} key={board.id}>
                  //   <S.Item center={false} color={'#ffe7ee'}>
                  //     <S.TopWrapper>
                  //       <S.TitleInput
                  //         value={board.name}
                  //         disabled={true}
                  //       ></S.TitleInput>
                  //       <MenuBtn>
                  //         <FontAwesomeIcon
                  //           icon={faEllipsis}
                  //           onClick={() => setShowMenu(!showMenu)}
                  //         />
                  //         {showMenu && (
                  //           <DropDownMenu
                  //             UpdateList={updateBoard}
                  //             handleDeleteItems={handleDelete}
                  //             cardId={board.id}
                  //           />
                  //         )}
                  //       </MenuBtn>
                  //     </S.TopWrapper>
                  //   </S.Item>
                  // </Grid>
                  <Grid item xs={12} sm={6} md={4} key={board.id}>
                    <BoardItem board={board} />
                  </Grid>
                ))}
                {newItem && (
                  <Grid item xs={12} sm={6} md={4}>
                    <S.Item center={false} color={'#ffe7ee'}>
                      <S.TopWrapper>
                        <S.TitleInput
                          placeholder="보드 이름을 입력해주세요"
                          defaultValue={title}
                          onChange={handleChangeTitle}
                        ></S.TitleInput>
                      </S.TopWrapper>
                      <S.BtnWrapper>
                        <S.SaveBtn
                          color="primary"
                          onClick={fetchCreate}
                          disable={!isTitleExsit}
                        >
                          확인
                        </S.SaveBtn>
                      </S.BtnWrapper>
                    </S.Item>
                  </Grid>
                )}
              </Grid>
            </S.BoardContainer>
          </S.RightContainer>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
