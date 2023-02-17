import request from '@/utils/api';
import axios, { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './DropDownMenu.styles';

interface IDropMenu {
  handleDeleteItems: () => void;
  UpdateList: () => void;
  boardId: number;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDeleteItems,
  UpdateList,
  boardId,
  setEdit,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const wrapperRef = useRef<any>();
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event: any) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  const handleItemMenu = () => {
    handleHideMenu();
    setEdit(true);
  };
  const handleHideMenu = () => {
    setVisible(false);
  };

  const handleDeleteBoard = async () => {
    await request.delete('/api/v1/boards', { data: { id: boardId } });
  };

  return (
    <S.Container ref={wrapperRef}>
      {visible && (
        <ul>
          <li onClick={handleItemMenu}>보드 이름 변경</li>
          <li onClick={handleDeleteBoard}>보드 삭제</li>
        </ul>
      )}
    </S.Container>
  );
};

export default DropDownMenu;
