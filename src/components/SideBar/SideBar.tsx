import * as S from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import SubTitle from '../SubTitle/SubTitle';
import WorkspaceImg from '../WorkspaceImg/WorkspaceImg';
import Button from '../Button/Button';
interface IMember {
  name: string;
  profile: string;
}

const SideBar = ({ memberInfo, handleModal }: SideBarProps) => {
  return (
    <S.LeftContainer>
      <S.LeftContentNotHover>
        <S.BarInfo>
          <WorkspaceImg
            size="sm"
            radius="rounded"
            image="/assets/authorization/pimfy_profile.png"
          />
          <SubTitle>pimfy</SubTitle>
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
          onClick={handleModal}
        >
          Members
        </Button>
      </S.LeftContent>
      <S.MembersWrapper>
        {memberInfo.map((member: IMember) => (
          // key 변경 필요
          <S.MemberWrapper key={member.name}>
            <S.Image
              width={'35px'}
              height={'35px'}
              img={member.profile}
            ></S.Image>
            <S.ProfileName>{member.name}</S.ProfileName>
          </S.MemberWrapper>
        ))}
      </S.MembersWrapper>
      <S.LeftContent>
        <S.Icon
          width={'20px'}
          height={'20px'}
          img={'/assets/workspace/setting-icon.png'}
        ></S.Icon>
        <SubTitle>Setting</SubTitle>
      </S.LeftContent>
    </S.LeftContainer>
  );
};
export default SideBar;
