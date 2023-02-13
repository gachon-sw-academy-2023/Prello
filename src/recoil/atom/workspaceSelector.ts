import { selector } from 'recoil';
import { IWorkspace } from '@/utils/types';
import { workspaceState } from './workpsace';

export const workspaceSelector = selector<IWorkspace>({
  key: 'workspaceSelector',
  get: ({ get }) => {
    get(workspaceState);
    return workspaceState;
  },
  set: ({ set }, newValue) => {
    set(workspaceState, newValue);
  },
});
