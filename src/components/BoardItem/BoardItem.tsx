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
      // onClick={() => navigate(`/board/${board.id}`)}
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
          <S.IconBtn onClick={handleMenu}>
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
      {!isEdit && (
        <S.BottomWrapper
          onClick={() => navigate(`/board/${board.id}`)}
        ></S.BottomWrapper>
      )}
    </S.Item>
  );
}
