import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface IDropMenu {
  handleDeleteItems: () => void;
  UpdateList: () => void;
  cardId: number;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDeleteItems,
  UpdateList,
  cardId,
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

  const handleDeleteCard = () => {
    axios.post('/card/delete', { cardId }).catch((error) => alert(error));
    UpdateList();
  };

  return (
    <S.Container ref={wrapperRef}>
      {visible && (
        <ul>
          <li onClick={handleDeleteCard}>카드 삭제</li>
          <li onClick={handleItemMenu}>아이템 전체 삭제</li>
        </ul>
      )}
    </S.Container>
  );
};

export default DropDownMenu;
