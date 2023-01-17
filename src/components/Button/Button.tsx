import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  height = 'md',
  color = 'gradient',
  radius = 'square',
  textColor = 'white',
  width = 15,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      {...rest}
      height={height}
      width={width}
      color={color}
      radius={radius}
      textColor={textColor}
    >
      {children}
    </S.Container>
  );
};

export default Button;
