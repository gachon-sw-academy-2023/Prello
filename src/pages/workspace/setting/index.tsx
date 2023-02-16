import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import DeleteModal from '@/components/Modals/DeleteModal/DeleteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import ROUTES from '@/routes';
import request from '@/utils/api';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './styles';

export default function WorkspaceSetting() {
  const { workspaceId } = useParams() as { workspaceId: string };
  const [workspace, setWorkspace] =
    useRecoilState<IWorkspace>(workspaceSelector);
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceSummary, setWorkspaceSummary] = useState<string>('');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const naviate = useNavigate();

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceSummary(e.target.value);
  }
  function handleModal() {
    setOpenModal(true);
  }

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
    request.put('/api/v1/workspaces', data).then(() => {
      fetchWorkspace();
      alert('워크스페이스 정보가 업데이트 되었습니다!');
    });
  };

  const deleteWorkspace = async () => {
    const config = {
      data: {
        workspaceId: parseInt(workspaceId),
      },
    };

    request.delete('/api/v1/workspaces/', config).then((res) => {
      alert('워크스페이스가 삭제되었습니다!');
      naviate(ROUTES.WORKSPACEDEFAULT);
    });
  };

  return (
    <S.Container>
      {isOpenModal && (
        <DeleteModal
          workspaceName={workspaceName}
          setOpenModal={setOpenModal}
          deleteWorkspace={deleteWorkspace}
        />
      )}
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
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                // defaultValue={workspaceSummary}
                value={workspaceSummary}
                onChange={handleWorkspaceExplain}
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
