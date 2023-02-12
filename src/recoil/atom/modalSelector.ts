import { selector } from 'recoil';
import { IModal } from './modal';
import { modalState } from './modal';

export const modalSelector = selector<IModal>({
  key: 'modalSelector',
  get: ({ get }) => {
    get(modalState);
    return modalState;
  },
  set: ({ set }, newValue) => {
    set(modalState, newValue);
  },
});
