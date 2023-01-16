import * as S from './SubTitle.styles';
import { SubTitleProps } from './SubTitle.types';

const SubTitle = ({ size = 'md', children }: SubTitleProps) => {
  return <S.SubTitle size={size}>{children}</S.SubTitle>;
};

export default SubTitle;
