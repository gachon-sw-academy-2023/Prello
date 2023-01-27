import { useState } from 'react';
import * as S from './styles';

interface IDropMenu {
  handleDeleteCard: () => void;
  handleDeleteItems: () => void;
}

const DropDownMenu: React.FC<IDropMenu> = ({
  handleDeleteCard,
  handleDeleteItems,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleItemMenu = () => {
    handleHideMenu();
    handleDeleteItems();
  };
  const handleHideMenu = () => {
    setVisible(false);
  };

  return (
    <S.Container>
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
