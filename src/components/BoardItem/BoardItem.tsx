import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';
import { MenuBtn } from '@/pages/board/styles';
import { IBoard } from '@/pages/workspace/detail';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import * as S from './BoardItem.styles';

type BoardProps = {
  board: IBoard;
};

export default function BoardItem({ board }: BoardProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleDelete = () => {};
  const updateBoard = async () => {
    try {
      const response = await axios.get('/board/list');
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  };
  return (
    <S.Item center={false} color={'#ffe7ee'}>
      <S.TopWrapper>
        <S.TitleInput value={board.name} disabled={true}></S.TitleInput>
        <MenuBtn>
          <S.IconBtn onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faEllipsis} />
          </S.IconBtn>
          {showMenu && (
            <DropDownMenu
              UpdateList={updateBoard}
              handleDeleteItems={handleDelete}
              boardId={board.id}
            />
          )}
        </MenuBtn>
      </S.TopWrapper>
    </S.Item>
  );
}
