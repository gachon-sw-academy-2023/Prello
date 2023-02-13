import { IWorkspace } from '@/utils/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window != 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'workspace',
  storage: sessionStorage,
});

export const workspaceState = atom<IWorkspace>({
  key: 'workspaceState',
  default: {
    id: 0,
    owner: '',
    name: '',
    summary: '',
    memberInfo: [],
  },
  effects_UNSTABLE: [persistAtom],
});
