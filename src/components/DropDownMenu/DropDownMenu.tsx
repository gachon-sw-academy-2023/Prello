import { IBoard } from '@/pages/workspace/detail/default';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './DropDownMenu.styles';

interface IDropMenu {
  handleDeleteItems: () => void;
  UpdateList: () => void;
  fetchBoard: (board: IBoard[]) => void;
  boardId: number;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  boardId,
  setEdit,
  fetchBoard,
}) => {
  const [visible, setVisible] = useState<boolean>(true);
  const { workspaceId } = useParams() as { workspaceId: string };

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

  const handleDeleteBoard = () => {
    axios
      .delete('/api/v1/boards', {
        data: { id: boardId, workspaceId: workspaceId },
      })
      .then((res) => fetchBoard(res.data.workspace));
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
