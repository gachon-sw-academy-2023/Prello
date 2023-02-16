import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import DeleteModal from '@/components/Modals/DeleteModal/DeleteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import ROUTES from '@/routes';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './styles';
import { modalSelector } from '@/recoil/atom/modalSelector';

export default function WorkspaceSetting() {
  const { workspaceId } = useParams() as { workspaceId: string };
  const [workspace, setWorkspace] =
    useRecoilState<IWorkspace>(workspaceSelector);
  const [modal, setModal] = useRecoilState(modalSelector);
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceSummary, setWorkspaceSummary] = useState<string>('');

  const naviate = useNavigate();

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceSummary(e.target.value);
  }
  const handleModal = () => {
    const data = {
      isOpen: !modal.isOpen,
    };
    setModal(data);
  };
  useEffect(() => {
    setWorkspaceName(workspace.name);
    setChangedWorkspaceName(workspace.name);
    setWorkspaceSummary(workspace.summary);
  }, []);

  const fetchWorkspace = async () => {
    const data = {
      id: workspace.id,
      owner: workspace.owner,
      name: changedWorkspaceName,
      summary: workspaceSummary,
      memberInfo: workspace.memberInfo,
    };
    setWorkspace(data);
    setWorkspaceName(changedWorkspaceName);
  };

  const updateWorkspace = async () => {
    const data = {
      id: parseInt(workspaceId),
      summary: workspaceSummary,
      name: changedWorkspaceName,
    };

    try {
      const response = await axios.post('/workspace/update', data);

      if (response.status === 200) {
        fetchWorkspace();
        alert('워크스페이스 정보가 업데이트 되었습니다!');
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  const deleteWorkspace = async () => {
    const data = {
      workspaceId: parseInt(workspaceId),
    };
    try {
      const response = await axios.post('/workspace/delete', data);
      if (response.status === 200) {
        alert('워크스페이스가 삭제되었습니다!');
        naviate(ROUTES.WORKSPACEDEFAULT);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  return (
    <S.Container>
      {modal.isOpen && <DeleteModal deleteWorkspace={deleteWorkspace} />}
      <Default>
        <SubHeader
          divider={true}
          children={workspace.name}
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader
          children={workspace.name}
          profileImg="public/assets/authorization/pimfy_profile.png"
        />
      </Mobile>
      <S.Wrapper>
        <SideBar
          workspaceName={workspace?.name}
          memberInfo={workspace?.memberInfo}
        />
        <S.RightContainer>
          <S.InfoContainer>
            <S.InfoContents>
              <SubTitle size="md">워크스페이스 정보</SubTitle>
              <S.EmptyBox />
              <WorkspaceImg
                radius="none"
                image="/assets/authorization/pimfy_profile.png"
              />
              <S.EmptyBox />
              <SubTitle size="sm">이름</SubTitle>
              <S.RoundLineInput
                value={changedWorkspaceName}
                onChange={handleWorkspaceName}
                data-testid="update-workspace-name"
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                value={workspaceSummary}
                onChange={handleWorkspaceExplain}
                data-testid="update-workspace-summary"
              />
              <S.EmptyBox />
              <S.SaveButtonWrapper>
                <Button
                  shadow={true}
                  color="primary"
                  height="md"
                  width={30}
                  disable={
                    !(
                      workspace?.name !== changedWorkspaceName ||
                      workspace?.summary !== workspaceSummary
                    )
                  }
                  onClick={updateWorkspace}
                >
                  변경 사항 저장
                </Button>
              </S.SaveButtonWrapper>

              <SubTitle size="md">워크스페이스 삭제</SubTitle>
              <S.EmptyBox />
              <Button
                shadow={true}
                color="primary"
                height="md"
                width={30}
                onClick={handleModal}
              >
                {workspaceName} 워크스페이스 삭제
              </Button>
            </S.InfoContents>
          </S.InfoContainer>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
}
