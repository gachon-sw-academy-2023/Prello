import * as S from './WorkspaceImg.styles';
import { ImageProps } from './WorkspaceImg.types';

const WorkspaceImg = ({
  size = 'md',
  radius,
  image = '/assets/workspace/sample-workspace-image.png',
}: ImageProps) => {
  return (
    <S.WorkspaceImg size={size} radius={radius} image={image}></S.WorkspaceImg>
  );
};

export default WorkspaceImg;
