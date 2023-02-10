import ROUTES from '@/routes';
import { Link } from 'react-router-dom';
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
      <Link to={ROUTES.MAIN}>
        <h1>PRELLO</h1>
      </Link>
      <div>
        {user?.nickname !== '' ? (
          <div>
            <span>
              Welcome, <b>{user?.nickname}</b>!
            </span>
            <Button
              height="md"
              color="empty"
              textColor={color}
              onClick={onLogout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Button
              height="md"
              color="empty"
              textColor={color}
              onClick={onLogin}
            >
              Log In
            </Button>
            <Button
              height="md"
              color="empty"
              textColor={color}
              onClick={onCreateAccount}
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </S.HeaderContainer>
  </header>
);
