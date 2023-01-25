import { atom } from 'recoil';

export interface IUser {
  id: number;
  email: string;
  password: string;
  nickname: string;
}

export const userState = atom<IUser | {}>({
  key: 'userState',
  default: {
    id: 0,
    email: '',
    password: '',
    nickname: '',
  },
});
