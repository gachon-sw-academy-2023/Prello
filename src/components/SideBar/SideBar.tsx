import * as S from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
interface IMember {
  name: string;
  profile: string;
}

const SideBar: React.FunctionComponent<SideBarProps> = (memberInfo: any) => {
  return (
    <S.LeftContainer>
      <S.LeftContentNotHover>
        <S.BarInfo>
          <S.BarImg src="src/assets/authorization/pimfy_profile.png" />
          <S.WorkspaceName workspaceName="pimfy">ddd</S.WorkspaceName>
        </S.BarInfo>
      </S.LeftContentNotHover>
      <S.Line margin="10px"></S.Line>
      <S.LeftContent>
        <S.Icon
          width={'20px'}
          height={'20px'}
          img={'src/assets/workspace/user-icon.png'}
        ></S.Icon>
        <S.Title margin={'10px 0'}>Members</S.Title>
      </S.LeftContent>
      <S.MembersWrapper>
        {memberInfo.memberInfo.map((member: IMember) => (
          <S.MemberWrapper>
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
        <S.Title margin={'10px 0'}>Setting</S.Title>
      </S.LeftContent>
    </S.LeftContainer>
  );
};
export default SideBar;
