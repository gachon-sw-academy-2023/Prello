import { ReactNode } from 'react';
interface IMember {
  name: string;
  profile: string;
}

export interface SideBarProps {
  Imembers: Array<IMember>;
}
