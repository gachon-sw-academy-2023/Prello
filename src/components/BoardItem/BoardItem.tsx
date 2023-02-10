import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';
import { MenuBtn } from '@/pages/board/styles';
import { IBoard } from '@/pages/workspace/detail';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { AxiosError } from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BoardItem.styles';

type BoardProps = {
  board: IBoard;
  workspaceId: string;
};

export default function BoardItem({ board, workspaceId }: BoardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [boardName, setBoardName] = useState<string>(board.name);
  const handleDelete = () => {};
  const handleNavigate = (workspaceId: string, boardId: number) => {
    navigate(`/workspace/${workspaceId}/${boardId}`);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };
  const handleButton = () => {
    if (boardName === board.name) {
      return true;
    }
    return false;
  };
  const fetchUpdate = async () => {
    const newBoardInfo = {
      id: board.id,
      name: boardName,
      workspaceId: workspaceId,
    };
    console.log(workspaceId);
    try {
      await axios.post('/board/update', newBoardInfo);
      setEdit(false);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  };
  return (
    <S.Item
      center={false}
      color={'#ffe7ee'}
      onClick={() => handleNavigate(workspaceId, board.id)}
    >
      <S.TopWrapper>
        <S.TitleInput
          type="text"
          ref={inputRef}
          value={boardName}
          disabled={!isEdit}
          onChange={handleChangeTitle}
        ></S.TitleInput>
        <MenuBtn>
          <S.IconBtn onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faEllipsis} />
          </S.IconBtn>
          {showMenu && (
            <DropDownMenu
              UpdateList={fetchUpdate}
              handleDeleteItems={handleDelete}
              boardId={board.id}
              setEdit={setEdit}
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
    </S.Item>
  );
}
