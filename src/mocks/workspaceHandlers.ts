import { getAllByAltText } from '@testing-library/react';
import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add, getByID } = useIndexedDB('workspace');

type IWorkspace = {
  id: string;
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
    });

    return res(ctx.status(200), ctx.delay(1000), ctx.json(CWorkspaces));
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
    });

    return res(ctx.status(200), ctx.delay(1000), ctx.json(PWorkspaces));
  }),

  rest.get('/workspace/detail', async (req: any, res, ctx) => {
    let Workspace: IWorkspace[] = [];
    const workspaceId = req.url.searchParams.get('workspaceId');
    console.log(workspaceId);
    try {
      await getByID(workspaceId).then((workspaceInfo: IWorkspace[]) => {
        Workspace = workspaceInfo;
      });
      return res(ctx.status(200), ctx.delay(1000), ctx.json(Workspace));
    } catch (error) {
      return res(
        ctx.status(500),
        ctx.delay(1000),
        ctx.json({ message: 'Store in DB Failed!' }),
      );
    }
  }),
];
