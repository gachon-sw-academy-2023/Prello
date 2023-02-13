import { selector } from 'recoil';
import { IModalContents } from './modalContents';
import { modalContentsState } from './modalContents';

export const userSelector = selector<IModalContents>({
  key: 'modalContentsSelector',
  get: ({ get }) => {
    get(modalContentsState);
    return modalContentsState;
  },
  set: ({ set }, newValue) => {
    set(modalContentsState, newValue);
  },
});
