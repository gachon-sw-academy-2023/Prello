import { Button } from '@/stories/Button';
import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  color = 'primary',
  backgroundColor = 'empty',
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
            <Button size="small" onClick={onLogout} label="Log out"></Button>
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in"></Button>
            <Button
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            ></Button>
          </>
        )}
      </div>
    </S.HeaderContainer>
  </header>
);
