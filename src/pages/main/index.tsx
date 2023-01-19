import { Default, Mobile } from '@/utils/mediaQuery';
import DefaultMain from './default';
import MobileMain from './mobile';

export default function Main() {
  return (
    <>
      <Default>
        <DefaultMain></DefaultMain>
      </Default>
      <Mobile>
        <MobileMain></MobileMain>
      </Mobile>
    </>
  );
}
