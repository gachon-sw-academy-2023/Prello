import React, { useState } from 'react';
import Detail from '../ItemModal/detail';
import * as S from '../styles';

interface IItemProps {
  children: React.ReactNode;
}

const Item: React.FC<IItemProps> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleModal = () => {
    setOpen(false);
    console.log(isOpen);
  };
  return (
    <S.ItemContainer>
      <S.Item onClick={() => setOpen(true)}>{children}</S.Item>
      {isOpen && <Detail setOpen={handleModal} />}
    </S.ItemContainer>
  );
};

export default Item;
