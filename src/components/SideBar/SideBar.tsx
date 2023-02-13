import * as S from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import SubTitle from '../SubTitle/SubTitle';
import WorkspaceImg from '../WorkspaceImg/WorkspaceImg';
import Button from '../Button/Button';
interface IMember {
  name: string;
  profile: string;
}

const SideBar = ({
  workspaceName,
  memberInfo,
  onModal,
  onNavigate,
}: SideBarProps) => {
  return (
    <S.LeftContainer>
      <S.LeftContentNotHover>
        <S.BarInfo>
          <WorkspaceImg
            size="sm"
            radius="rounded"
            image="/assets/authorization/pimfy_profile.png"
          />
          <SubTitle>{workspaceName}</SubTitle>
        </S.BarInfo>
      </S.LeftContentNotHover>
      <S.Line margin="10px"></S.Line>
      <S.LeftContent>
        <S.Icon
          width={'20px'}
          height={'20px'}
          img={'/assets/workspace/user-icon.png'}
        ></S.Icon>
        <Button
          height="xlg"
          color="empty"
          textColor="darkgray"
          onClick={onModal}
        >
          Members
        </Button>
      </S.LeftContent>
      <S.MembersWrapper>
        {memberInfo?.map((member) => (
          // key 변경 필요
          <S.MemberWrapper key={member}>
            <S.Image
              width={'35px'}
              height={'35px'}
              img="/assets/workspace/sample-profile-image.png"
            ></S.Image>
            <S.ProfileName>{member}</S.ProfileName>
          </S.MemberWrapper>
        ))}
      </S.MembersWrapper>
      <S.LeftContent>
        <S.Icon
          width={'20px'}
          height={'20px'}
          img={'/assets/workspace/setting-icon.png'}
        ></S.Icon>
        <Button
          height="xlg"
          color="empty"
          textColor="darkgray"
          onClick={onNavigate}
        >
          Setting
        </Button>
      </S.LeftContent>
    </S.LeftContainer>
  );
};
export default SideBar;
