import * as S from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import SubTitle from '../SubTitle/SubTitle';
import WorkspaceImg from '../WorkspaceImg/WorkspaceImg';
interface IMember {
  name: string;
  profile: string;
}

const SideBar = ({ memberInfo }: SideBarProps) => {
  return (
    <S.LeftContainer>
      <S.LeftContentNotHover>
        <S.BarInfo>
          <WorkspaceImg
            size="sm"
            radius="rounded"
            image="src/assets/authorization/pimfy_profile.png"
          />
          <SubTitle>pimfy</SubTitle>
        </S.BarInfo>
      </S.LeftContentNotHover>
      <S.Line margin="10px"></S.Line>
      <S.LeftContent>
        <S.Icon
          width={'20px'}
          height={'20px'}
          img={'src/assets/workspace/user-icon.png'}
        ></S.Icon>
        <SubTitle>Members</SubTitle>
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
          img={'src/assets/workspace/setting-icon.png'}
        ></S.Icon>
        <SubTitle>Setting</SubTitle>
      </S.LeftContent>
    </S.LeftContainer>
  );
};
export default SideBar;
