import { selector } from 'recoil';
import { IUser } from './user';
import { userState } from './user';

export const userSelector = selector<IUser | {}>({
  key: 'userSelector',
  get: ({ get }) => {
    get(userState);
    return userState;
  },
  set: ({ set }, newValue) => {
    set(userState, { ...newValue });
  },
});
