import React, { ReactNode } from 'react';
interface IMember {
  name: string;
  profile: string;
}
export interface SideBarProps {
  memberInfo: Array<IMember>;
}
