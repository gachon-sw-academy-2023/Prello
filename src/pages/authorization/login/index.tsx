import Button from '@/components/Button/Button';
import * as S from './styles';

function Login() {
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.Img />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Header>
          <S.BackBtn>
            <img />
            <span>Back</span>
          </S.BackBtn>
          <p>
            <span>I want to have an account!</span>
            <S.StyledText>Sign Up</S.StyledText>
          </p>
        </S.Header>

        <S.Content>
          <S.Ttile>LOGIN</S.Ttile>

          <S.Form>
            <label>Email</label>
            <S.InputEmail type="text" placeholder="Type here"></S.InputEmail>

            <label>Password</label>
            <S.InputPwd type="password"></S.InputPwd>
          </S.Form>

          <Button color="gradient" radius="circle">
            Sign In
          </Button>
        </S.Content>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Login;
