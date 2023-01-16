import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 * @param {Pick<ButtonProps,"size">} size - 버튼 크기
 * @param {Pick<ButtonProps,"color">} color - 버튼 색상
 * @todo 기능 더 만들기
 */

const Button = ({
  size = 'md',
  color = 'gradient',
  radius = 'square',
  textColor = 'white',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      {...rest}
      size={size}
      color={color}
      radius={radius}
      textColor={textColor}
    >
      {children}
    </S.Container>
  );
};

export default Button;
