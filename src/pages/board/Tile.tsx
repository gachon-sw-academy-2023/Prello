import React from 'react';
import * as S from './styles';

interface ITileProps {
  children: React.ReactNode;
}

const Tile: React.FC<ITileProps> = ({ children }) => {
  return <S.Item>{children}</S.Item>;
};

export default Tile;
