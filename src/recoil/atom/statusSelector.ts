import { selector } from 'recoil';
import { IStatus } from './status';
import { statusState } from './status';

export const statusSelector = selector<IStatus>({
  key: 'statusSelector',
  get: ({ get }) => {
    get(statusState);
    return statusState;
  },
  set: ({ set }, newValue) => {
    set(statusState, newValue);
  },
});
