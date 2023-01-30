import React, { useState } from 'react';
import Detail from '../ItemModal/detail';
import * as S from '../styles';

interface ITileProps {
  children: React.ReactNode;
}

const Item: React.FC<ITileProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <S.Item onClick={() => setOpen(true)}>
      {children}
      {open && <Detail />}
    </S.Item>
  );
};

export default Item;
