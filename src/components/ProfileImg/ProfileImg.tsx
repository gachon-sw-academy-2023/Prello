import * as S from './ProfileImg.styles';
import { ImageProps } from './ProfileImg.types';

const ProfileImg = ({
  size = 'md',
  image = '/assets/workspace/sample-profile-image.png',
}: ImageProps) => {
  return <S.ProfileImg size={size} image={image}></S.ProfileImg>;
};

export default ProfileImg;
