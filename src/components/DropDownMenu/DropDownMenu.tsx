import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './DropDownMenu.styles';

interface IDropMenu {
  handleDelete: () => void;
  updateBoard: () => void;
  boardId: number;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDelete,
  updateBoard,
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

  const handleBoardMenu = () => {
    handleHideMenu();
    handleDeleteBoard();
  };
  const handleUpdateBoard = () => {};
  const handleHideMenu = () => {
    setVisible(false);
  };

  const handleDeleteBoard = () => {
    axios.post('/card/delete', { boardId }).catch((error) => alert(error));
  };

  return (
    <S.Container ref={wrapperRef}>
      {visible && (
        <ul>
          <li onClick={handleUpdateBoard}>보드 이름 수정</li>
          <li onClick={handleDeleteBoard}>보드 삭제</li>
        </ul>
      )}
    </S.Container>
  );
};

export default DropDownMenu;
