import Button from '../Button/Button';
import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  color = 'white',
  backgroundColor = 'primary',
}: HeaderProps) => (
  <header>
    <S.HeaderContainer color={color} backgroundColor={backgroundColor}>
      <div>
        <h1>PRELLO</h1>
      </div>
      <div>
        {user ? (
          <>
            <span>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size="md"
              color="empty"
              textColor={color}
              onClick={onLogout}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button size="md" color="empty" textColor={color} onClick={onLogin}>
              Log in
            </Button>
            <Button
              size="md"
              color="empty"
              textColor={color}
              onClick={onCreateAccount}
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </S.HeaderContainer>
  </header>
);
