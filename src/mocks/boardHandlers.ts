import { getAllByAltText } from '@testing-library/react';
import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { add, getAll } = useIndexedDB('board');

type IBoard = {
  workspaceId: number;
  name: string;
};

export const boardHandlers = [
  rest.post('/board/create', async (req: any, res, ctx) => {
    try {
      await add({ ...req.body });
      return res(
        ctx.status(200),
        ctx.json({ message: 'Board Creation Success!' }),
      );
    } catch (error) {
      return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
    }
  }),
  rest.get('/board/list', async (req: any, res, ctx) => {
    let workspace: IBoard[] = [];
    const id = 1;
    try {
      await getAll().then((boards: IBoard[]) => {
        workspace = boards.filter(({ workspaceId }) => workspaceId === id);
        console.log(workspace);
      });
      return res(ctx.status(200), ctx.json(workspace));
    } catch (error) {}
  }),
];
