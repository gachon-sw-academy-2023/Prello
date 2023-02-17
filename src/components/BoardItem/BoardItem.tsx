import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';
import { MenuBtn } from '@/pages/board/styles';
import { IBoard } from '@/pages/workspace/detail';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BoardItem.styles';

type BoardProps = {
  board: IBoard;
  workspaceId: string;
  fetchBoard: (board: IBoard[]) => void;
};

export default function BoardItem({
  board,
  workspaceId,
  fetchBoard,
}: BoardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [boardName, setBoardName] = useState<string>(board.name);
  const handleDelete = () => {};

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };
  const handleButton = () => {
    if (boardName === board.name) {
      return true;
    }
    return false;
  };
  const handleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };
  const fetchUpdate = async () => {
    const newBoardInfo = {
      id: board.id,
      name: boardName,
      workspaceId: workspaceId,
    };
    await axios.put('/api/v1/boards', newBoardInfo).then(() => {
      setEdit(false);
    });
  };
  return (
    <S.Item center={false} color={'#ffe7ee'}>
      <S.TopWrapper>
        <S.TitleInput
          type="text"
          ref={inputRef}
          value={boardName}
          disabled={!isEdit}
          onChange={handleChangeTitle}
          data-testid="update-board-name"
        ></S.TitleInput>
        <MenuBtn data-testid="update-board">
          <S.IconBtn onClick={handleMenu}>
            <FontAwesomeIcon icon={faEllipsis} />
          </S.IconBtn>
          {showMenu && (
            <DropDownMenu
              UpdateList={fetchUpdate}
              handleDeleteItems={handleDelete}
              boardId={board.id}
              setEdit={setEdit}
              fetchBoard={fetchBoard}
            />
          )}
        </MenuBtn>
      </S.TopWrapper>
      {isEdit && (
        <S.BtnWrapper>
          <S.SaveBtn
            color="primary"
            disable={handleButton()}
            onClick={fetchUpdate}
          >
            확인
          </S.SaveBtn>
        </S.BtnWrapper>
      )}
      {!isEdit && (
        <S.BottomWrapper
          onClick={() => navigate(`/board/${board.id}`)}
        ></S.BottomWrapper>
      )}
    </S.Item>
  );
}
