import * as S from './WorkspaceImg.styles';
import { ImageProps } from './WorkspaceImg.types';

const WorkspaceImg = ({
  size = 'md',
  radius = '0px',
  image = 'src/assets/workspace/sample-workspace-image.png',
}: ImageProps) => {
  return (
    <S.RworkspaceImg
      size={size}
      radius={radius}
      image={image}
    ></S.RworkspaceImg>
  );
};

export default WorkspaceImg;
