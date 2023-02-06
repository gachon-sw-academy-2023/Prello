import React, { useState } from 'react';
import Detail from '../ItemModal/detail';
import * as S from '../styles';

interface IItemProps {
  children: React.ReactNode;
  itemId: number;
}

const Item: React.FC<IItemProps> = ({ children, itemId }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleModal = () => {
    setOpen(false);
    console.log(isOpen);
  };
  return (
    <S.ItemContainer id={`${itemId}`} draggable="true">
      <S.Item onClick={() => setOpen(true)}>{children}</S.Item>
      {isOpen && <Detail setOpen={handleModal} />}
    </S.ItemContainer>
  );
};

export default Item;
