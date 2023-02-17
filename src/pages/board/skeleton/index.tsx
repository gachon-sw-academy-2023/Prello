import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import Inform from '@/pages/util';
import { Default, Mobile } from '@/utils/mediaQuery';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sortable from 'sortablejs';
import Card from '../Card/Card';
import * as S from '../styles';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import { useRecoilValue } from 'recoil';

interface ICard {
  id: number;
  title: string;
  order: number;
}

interface IBoard {
  id: number;
  name: string;
  workspaceId: number;
}

export default function BoardSkeleton() {
  const workspace = useRecoilValue(workspaceSelector);
  const [lists, setLists] = useState<ICard[]>([]);

  const UpdateList = () => {};

  return (
    <S.Container>
      <Default>
        <WithSearchBar
          divider={true}
          children="보드이름"
          profileImg="public/assets/authorization/pimfy_profile.png"
          searchBar={true}
          isLoading={true}
        />
      </Default>
      <Mobile>
        <MobileHeader
          children="보드이름"
          profileImg="public/assets/authorization/pimfy_profile.png"
        />
      </Mobile>
      <S.Wrapper>
        <Default>
          <SideBar
            workspaceName={workspace.name}
            memberInfo={workspace.memberInfo}
          />
        </Default>

        <Default>
          <S.RightWrapper>
            <S.ListContainer className="column">
              {lists
                .sort((a, b) => a.order - b.order)
                .map((list: ICard) => (
                  <Card
                    title={list.title}
                    key={list.id}
                    cardId={list.id}
                    UpdateList={UpdateList}
                  />
                ))}
            </S.ListContainer>
            <S.AddListWrapper>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.AddListWrapper>
          </S.RightWrapper>
        </Default>

        <Mobile>
          <S.MobileRightWrapper>
            <S.ListMobileContiner className="column">
              {lists.map((list: ICard) => (
                <Card
                  title={list.title}
                  key={list.id}
                  cardId={list.id}
                  UpdateList={UpdateList}
                />
              ))}
            </S.ListMobileContiner>
            <S.MobileAddListWrapper>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.MobileAddListWrapper>
          </S.MobileRightWrapper>
        </Mobile>
      </S.Wrapper>
    </S.Container>
  );
}
