import axios, { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './DropDownMenu.styles';

interface IDropMenu {
  handleDeleteItems: () => void;
  UpdateList: () => void;
  boardId: number;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDeleteItems,
  UpdateList,
  boardId,
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
    handleDeleteItems();
  };
  const handleHideMenu = () => {
    setVisible(false);
  };

  const handleDeleteBoard = async () => {
    try {
      const response = await axios.post('/board/delete', { boardId });
      console.log(boardId);
      if (response.status === 200) {
        UpdateList();
        console.log('삭제완료');
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
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
