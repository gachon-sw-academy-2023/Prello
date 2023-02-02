import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface IDropMenu {
  handleDeleteItems: () => void;
  cardId: number;
}

const DropDownMenu: React.FC<IDropMenu> = ({ handleDeleteItems, cardId }) => {
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
    axios.post('/list/delete', { cardId }).then((res) => console.log(res));
  };

  return (
    <S.Container ref={wrapperRef}>
      {visible && (
        <ul>
          <li onClick={handleDeleteCard}>리스트 삭제</li>
          <li onClick={handleItemMenu}>아이템 전체 삭제</li>
        </ul>
      )}
    </S.Container>
  );
};

export default DropDownMenu;
