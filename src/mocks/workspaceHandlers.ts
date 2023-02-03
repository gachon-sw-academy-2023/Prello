import { getAllByAltText } from '@testing-library/react';
import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add } = useIndexedDB('workspace');

type IWorkspace = {
  owner: string;
  name: string;
  summary: string;
  memberInfo: string[];
};

export const workspaceHandlers = [
  rest.post('/workspace/create', async (req: any, res, ctx) => {
    try {
      await add({ ...req.body });
      return res(
        ctx.status(200),
        ctx.json({ message: 'Workspace Creation Success!' }),
      );
    } catch (error) {
      return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
    }
  }),

  rest.get('/workspace/list', async (req, res, ctx) => {
    let CWorkspaces: IWorkspace[] = [];
    const email = req.url.searchParams.get('email');

    await getAll().then((workspaces: IWorkspace[]) => {
      CWorkspaces = workspaces.filter(({ owner }) => owner === email);
      console.log(CWorkspaces);
    });

    return res(ctx.status(200), ctx.json(CWorkspaces));
  }),

  rest.get('/workspace/list/participate', async (req: any, res, ctx) => {
    let PWorkspaces: IWorkspace[] = [];
    const email = req.url.searchParams.get('email');

    await getAll().then((workspaces: IWorkspace[]) => {
      {
        workspaces.map((workspace) =>
          workspace.memberInfo.includes(email)
            ? (PWorkspaces = [...PWorkspaces, workspace])
            : (PWorkspaces = PWorkspaces),
        );
      }
      console.log(PWorkspaces);
    });

    return res(ctx.status(200), ctx.json(PWorkspaces));
  }),
];
