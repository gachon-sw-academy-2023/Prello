import { modalSelector } from '@/recoil/atom/modalSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import { useRecoilState } from 'recoil';
import DefaultDetail from './default';
import MobileDetail from './mobile';
export default function WorkspaceDetail() {
  return (
    <>
      <Default>
        <DefaultDetail />
      </Default>
      <Mobile>
        <MobileDetail />
      </Mobile>
    </>
  );
}
