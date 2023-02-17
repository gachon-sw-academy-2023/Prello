import { atom } from 'recoil';

export interface IStatus {
  isError: boolean;
  isLoading: boolean;
}

export const statusState = atom<IStatus>({
  key: 'errorState',
  default: {
    isError: false,
    isLoading: false,
  },
});
