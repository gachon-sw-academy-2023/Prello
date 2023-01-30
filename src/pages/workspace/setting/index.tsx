import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Default, Mobile } from '@/utils/mediaQuery';
import { useState } from 'react';
import Modal from './modal';
import * as S from './styles';

interface IMember {
  name: string;
  profile: string;
}

interface IBoard {
  title: string;
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

let boards: IBoard[] = [
  {
    title: 'First Board',
  },
  {
    title: 'Second Board',
  },
];

export default function WorkspaceSetting() {
  const [workspaceName, setWorkspaceName] = useState<string>('PIMFY');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceExplain, setWorkspaceExplain] =
    useState<string>('핌피팀입니당');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceExplain(e.target.value);
  }
  function handleDelete() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <S.Container>
      {isModalOpen && (
        <Modal onClickToggleModal={() => setIsModalOpen(!isModalOpen)}>
          <SubTitle size="md">워크스페이스 삭제</SubTitle>
          <S.ExplainText>
            워크스페이스 삭제시 보드, 아이템들이 모두 함께 삭제되며 복구가
            불가능합니다.
          </S.ExplainText>
          <S.ExplainText>
            워크페이스 삭제를 원하시면 {workspaceName}을(를) 아래에
            입력해주세요.
          </S.ExplainText>
          <S.RoundInput></S.RoundInput>
          <S.EmptyBox />
          <S.DeleteButton
            shadow={true}
            color="primary"
            height="md"
            width={0}
            onClick={handleDelete}
          >
            삭제하기
          </S.DeleteButton>
        </Modal>
      )}
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
      <S.Wrapper>
        <SideBar memberInfo={members} />
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
                defaultValue={workspaceName}
                value={changedWorkspaceName}
                onChange={handleWorkspaceName}
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                defaultValue={workspaceExplain}
                value={workspaceExplain}
                onChange={handleWorkspaceExplain}
              />
              <S.EmptyBox />
              <S.SaveButtonWrapper>
                <Button shadow={true} color="notworking" height="md" width={30}>
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
                onClick={handleDelete}
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
