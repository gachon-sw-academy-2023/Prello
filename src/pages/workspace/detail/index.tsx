import BoardItem from '@/components/BoardItem/BoardItem';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import InviteModal from '@/components/Modals/InviteModal/InviteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import Inform from '@/pages/util';
import { modalSelector } from '@/recoil/atom/modalSelector';
import { statusSelector } from '@/recoil/atom/statusSelector';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import request from '@/utils/api';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DetailSkeleton from './skeleton';
import * as S from './styles';

export interface IBoard {
  id: number;
  name: string;
  workspaceId: number;
}

export default function WorkspaceDetail() {
  const navigate = useNavigate();
  const { workspaceId } = useParams() as { workspaceId: string };
  const [modal, setModal] = useRecoilState(modalSelector);
  const [workspace, setWorkpsace] =
    useRecoilState<IWorkspace>(workspaceSelector);
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [workspaceSummary, setWorkspaceSummary] = useState<string>('');
  const [isTitleExsit, setIsTitleExsit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [newItem, setNewItem] = useState<boolean>(false);
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [status, setStatus] = useRecoilState(statusSelector);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModal = () => {
    const data = {
      isOpen: !modal.isOpen,
    };
    setModal(data);
  };

  const handleNavigate = (param: string) => {
    navigate(`/workspace-setting/${param}`);
  };

  const handleCreate = () => {
    setNewItem(true);
  };
  const fetchCreate = async () => {
    const info = {
      workspaceId: workspaceId,
      name: title,
    };
    if (title.length > 0) {
      await request.post('/api/v1/boards', info).finally(() => {
        setTitle('');
        setNewItem(false);
        fetchBoardList();
      });
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
    const data = {
      isError: false,
      isLoading: true,
    };
    setStatus(data);

    await request
      .get('/api/v1/workspaces', {
        params: {
          workspaceId: workspaceId,
        },
      })
      .then((res) => {
        setWorkspaceName(res.data.name);
        setWorkspaceSummary(res.data.summary);
        setWorkpsace(res.data);

        const data = {
          isError: false,
          isLoading: false,
        };
        setStatus(data);
      });
  };

  const fetchBoardList = async () => {
    await request
      .get('/api/v1/boards', {
        params: {
          workspaceId: workspaceId,
        },
      })
      .then((res) => {
        setBoards(res.data);
      });
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  useEffect(() => {
    setBoards(boards);
  }, [boards]);

  const fetchBoard = (board: IBoard[]) => {
    setBoards(board);
  };

  if (status.isLoading) return <DetailSkeleton />;
  if (status.isError)
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
      {modal.isOpen && (
        <InviteModal
          workspaceId={workspaceId}
          fetchWorkspaces={fetchWorkspaceInfo}
        ></InviteModal>
      )}

      <S.Wrapper>
        <SideBar
          workspaceName={workspace.name}
          memberInfo={workspace.memberInfo}
          onModal={handleModal}
          onNavigate={() => handleNavigate(workspaceId)}
        />
        <S.RightContainer>
          <S.InfoContainer>
            <WorkspaceImg
              radius="none"
              image="/assets/authorization/pimfy_profile.png"
            />
            <S.InfoContents>
              <SubTitle size="md">{workspace.name}</SubTitle>
              <S.ExplainText>{workspace.summary}</S.ExplainText>
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
                  data-testid="create-board"
                >
                  <S.Image
                    width={'50px'}
                    height={'50px'}
                    img={'/assets/workspace/sample-add-icon.png'}
                  ></S.Image>
                </S.Item>
              </Grid>
              {boards.map((board) => (
                <Grid item xs={12} sm={6} md={4} key={board.id}>
                  <BoardItem
                    board={board}
                    workspaceId={workspaceId}
                    fetchBoard={fetchBoard}
                  />
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
                        data-testid="create-board-name"
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
      </S.Wrapper>
    </S.Container>
  );
}
