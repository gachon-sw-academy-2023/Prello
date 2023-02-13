import { atom } from 'recoil';

export interface IModal {
  isOpen: boolean;
}

export const modalState = atom<IModal>({
  key: 'modalState',
  default: {
    isOpen: false,
  },
});
