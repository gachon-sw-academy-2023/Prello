import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window != 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({ key: 'user', storage: sessionStorage });

export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  nickname?: string;
}

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    id: 0,
    email: '',
    password: '',
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});
