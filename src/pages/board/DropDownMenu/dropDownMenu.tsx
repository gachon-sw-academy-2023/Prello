import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';
interface ICard {
  id: number;
  title: string;
  order: number;
}
interface IDropMenu {
  handleDeleteItems: () => void;
  UpdateList: (list: ICard[]) => void;
  cardId: number;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDeleteItems,
  UpdateList,
  cardId,
}) => {
  const [visible, setVisible] = useState<boolean>(true);
  const { boardId } = useParams();

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

  const handleDeleteCard = () => {
    axios
      .post('/card/delete', { cardId, boardId })
      .then((res) => UpdateList(res.data));
  };

  return (
    <S.Container test-id="dropbox-menu" ref={wrapperRef}>
      {visible && (
        <ul>
          <li onClick={handleDeleteCard} test-id="delete-card">
            카드 삭제
          </li>
          <li onClick={handleItemMenu}>아이템 전체 삭제</li>
        </ul>
      )}
    </S.Container>
  );
};

export default DropDownMenu;
