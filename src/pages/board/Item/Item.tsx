import React, { useEffect, useState } from 'react';
import Detail from '../ItemModal/detail';
import * as S from '../styles';

interface IItemProps {
  children: React.ReactNode;
  itemId: number;
  fetchItems: () => void;
}

const Item: React.FC<IItemProps> = ({ children, itemId, fetchItems }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(false);
    fetchItems();
  };
  return (
    <S.ItemContainer id={`${itemId}`} draggable="true">
      <S.Item onClick={() => setOpen(true)}>{children}</S.Item>
      {isOpen && <Detail setOpen={handleModal} itemId={itemId} />}
    </S.ItemContainer>
  );
};

export default Item;
