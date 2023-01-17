import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

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
      className={`button--${size}`}
    >
      {children}
    </S.Container>
  );
};

export default Button;
