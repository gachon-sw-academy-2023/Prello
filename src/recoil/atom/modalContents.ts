import { atom } from 'recoil';

export interface IModalContents {
  //   id?: number;
  //   email?: string;
  //   password?: string;
  //   nickname?: string;
  text: string;
}

export const modalContentsState = atom<IModalContents>({
  key: 'modalContentsState',
  default: {
    text: '',
  },
});
