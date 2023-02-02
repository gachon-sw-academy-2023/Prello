import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import ProfileImg from '@/components/ProfileImg/ProfileImg';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import ROUTES from '@/routes';
import { userSelector } from '@/recoil/atom/userSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './styles';
import { useState, useCallback, useEffect } from 'react';
import CreateWorkspace from '../../../components/Modals/CreateModal/CreateModal';
import axios from 'axios';

export default function WorkspaceDefault() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        setError(null);
        setWorkspaces(null);
        setLoading(true);

        const response = await axios.get('/workspace');
        if (response.status === 200) {
          setWorkspaces(response.data);
        }
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchWorkspaces();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!workspaces) return null;

  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={false}
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="public/assets/authorization/pimfy_profile.png" />
      </Mobile>
      {isOpenModal && (
        <CreateWorkspace setOpenModal={setOpenModal}></CreateWorkspace>
      )}
      <S.ContentsWrapper>
        <S.Wrapper>
          <S.Title>나의 워크스페이스</S.Title>
          <Mobile>
            <Button
              width={20}
              radius={'rounded'}
              color={'primary'}
              shadow={true}
              onClick={handleModal}
            >
              + 새로운 워크스페이스
            </Button>
          </Mobile>
          <Default>
            <Button
              width={50}
              radius={'rounded'}
              color={'primary'}
              shadow={true}
              onClick={handleModal}
            >
              + 새로운 워크스페이스
            </Button>
          </Default>
        </S.Wrapper>

        <Grid container spacing={2}>
          {workspaces.map((workspace: any) => (
            <Grid item xs={12} sm={4} md={3} key={workspace.id}>
              <S.Item
                onClick={() => {
                  navigate('/workspace-detail');
                }}
              >
                <S.GradientBG></S.GradientBG>
                <S.ItemContents>
                  <S.Title>{workspace.name}</S.Title>
                  <S.ItemBoardName>{workspace.summary}</S.ItemBoardName>
                  <S.ProfileImages>
                    <ProfileImg image="/assets/workspace/sample-profile-image.png" />
                    <ProfileImg image="/assets/workspace/sample-profile-image.png" />
                    <ProfileImg image="/assets/workspace/sample-profile-image.png" />
                  </S.ProfileImages>
                </S.ItemContents>
              </S.Item>
            </Grid>
          ))}
        </Grid>
      </S.ContentsWrapper>
    </S.Container>
  );
}
