import { userSelector } from '@/recoil/atom/userSelector';
import ROUTES from '@/routes';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './SubHeader.style';
import { SubHeaderProps } from './SubHeader.types';
export const SubHeader = ({
  profileImg,
  searchBar,
  divider,
  children,
}: SubHeaderProps) => {
  const [user, setUser] = useRecoilState(userSelector);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleClose();
    setUser({
      id: 0,
      email: '',
      password: '',
      nickname: '',
    });
    navigate(ROUTES.MAIN);
  };

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <S.Header>
      <S.LeftHeaderDiv>
        <Link to={ROUTES.MAIN}>
          <S.Title>Prello</S.Title>
        </Link>
        {divider && <S.Divider />}
        <S.BoardName>{children}</S.BoardName>
      </S.LeftHeaderDiv>
      <S.RightHeaderDiv>
        <S.SearchBar placeholder="Search" searchBar={searchBar} />
        <S.HeaderImg
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          profileImg={profileImg}
        />

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </S.RightHeaderDiv>
    </S.Header>
  );
};
