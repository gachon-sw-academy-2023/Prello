import { HTMLAttributes } from 'react';

export interface CreateWorkspaceProps extends HTMLAttributes<HTMLDivElement> {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  fetchWorkspaces: () => void;
}

export interface DeleteWorkspaceProps extends HTMLAttributes<HTMLDivElement> {
  workspaceName: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteWorkspace: () => void;
}

export interface InviteMembersProps extends HTMLAttributes<HTMLDivElement> {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DetailProps extends HTMLAttributes<HTMLDivElement> {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserImaegsProps extends HTMLAttributes<HTMLDivElement> {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface WorkspaceUserImageProps
  extends HTMLAttributes<HTMLDivElement> {
  members: string[];
}

export interface WorkspaceContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  workspaces?: IWorkspace[];
}

export interface IWorkspace {
  id: number;
  owner: string;
  name: string;
  summary: string;
  memberInfo: string[];
}

export interface IUser {
  email: string;
  password: string;
}

export interface IJUser {
  email: string;
  password: string;
  nickname: string;
}

export interface IDeleteWorkspace {
  workspaceId: number;
}
