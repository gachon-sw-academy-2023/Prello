import { IDeleteWorkspace, IUser, IWorkspace } from '@/utils/types';
import { getAllByAltText } from '@testing-library/react';
import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add, deleteRecord } = useIndexedDB('workspace');

export const workspaceHandlers = [
  rest.post('/workspace/create', async (req, res, ctx) => {
    const { owner, name, summary, memberInfo } = await req.json<IWorkspace>();

    try {
      await add({
        owner: owner,
        name: name,
        summary: summary,
        memberInfo: memberInfo,
      });
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

  rest.get('/workspace/list/participate', async (req, res, ctx) => {
    let PWorkspaces: IWorkspace[] = [];
    const email = req.url.searchParams.get('email');

    if (email) {
      await getAll().then((workspaces: IWorkspace[]) => {
        {
          workspaces.map((workspace) =>
            workspace.memberInfo.includes(email)
              ? (PWorkspaces = [...PWorkspaces, workspace])
              : (PWorkspaces = PWorkspaces),
          );
        }
      });
    }

    return res(ctx.status(200), ctx.delay(1000), ctx.json(PWorkspaces));
  }),

  rest.post('/workspace/delete', async (req, res, ctx) => {
    const { workspaceId } = await req.json<IDeleteWorkspace>();
    console.log(workspaceId);

    try {
      await deleteRecord(workspaceId);

      return res(
        ctx.status(200),
        ctx.json({ message: 'Workspace Delete Success!' }),
      );
    } catch {
      return res(ctx.status(500), ctx.json({ message: 'Fail to Delete Data' }));
    }
  }),
];
