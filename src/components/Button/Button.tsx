import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 * @param {Pick<ButtonProps,"size">} size - 버튼 크기
 * @param {Pick<ButtonProps,"color">} color - 버튼 색상
 * @todo 기능 더 만들기
 */

const Button = ({
  size = 'md',
  color = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      {children}
    </S.Container>
  );
};

export default Button;
