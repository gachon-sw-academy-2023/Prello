import { ReactNode } from 'react';
interface IMember {
  name: string;
  profile: string;
}
let members = [
  {
    name: 'dahye',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'leah',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'rylee',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버1',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버2',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버3',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버4',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버5',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버6',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버7',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버8',
    profile: 'src/assets/workspace/sample-profile-image.png',
  },
];
export interface SideBarProps {
  Imembers: Array<IMember>;
}
