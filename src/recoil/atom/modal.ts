import { atom } from 'recoil';

export interface IModal {
  isOpen: boolean;
  text?: string;
}

export const modalState = atom<IModal>({
  key: 'modalState',
  default: {
    isOpen: false,
    text: '',
  },
});
