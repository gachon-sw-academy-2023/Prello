import { HTMLAttributes } from 'react';
interface IMember {
  name: string;
  profile: string;
}
export interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  workspaceName: string;
  memberInfo?: string[];
  onModal?: () => void;
  onNavigate?: () => void;
}
