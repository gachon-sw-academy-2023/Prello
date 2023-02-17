import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { add, getAll, update, deleteRecord } = useIndexedDB('board');

type IBoard = {
  workspaceId: number;
  name: string;
};

export const boardHandlers = [
  rest.post('/api/v1/boards', async (req: any, res, ctx) => {
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
  rest.get('/api/v1/boards', async (req: any, res, ctx) => {
    let workspace: IBoard[] = [];
    const id = req.url.searchParams.get('workspaceId');
    try {
      await getAll().then((boards: IBoard[]) => {
        workspace = boards.filter(({ workspaceId }) => workspaceId === id);
      });
      return res(ctx.status(200), ctx.delay(1000), ctx.json(workspace));
    } catch (error) {
      return res(
        ctx.status(500),
        ctx.delay(1000),
        ctx.json({ message: 'Store in DB Failed!' }),
      );
    }
  }),
  rest.get('/api/v1/boards/:boardId', async (req: any, res, ctx) => {
    let board;
    const boardId = req.params.boardId;

    try {
      await getAll().then((boards) => {
        board = boards.find(({ id }) => id === parseInt(boardId));
      });
      return res(ctx.status(200), ctx.delay(1000), ctx.json(board));
    } catch (error) {
      return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
    }
  }),
  rest.put('/api/v1/boards', async (req: any, res, ctx) => {
    try {
      await update({ ...req.body });
      return res(
        ctx.status(200),
        ctx.json({ message: 'Board Update Success!' }),
      );
    } catch (error) {
      return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
    }
  }),
  rest.delete('/api/v1/boards', async (req: any, res, ctx) => {
    try {
      await deleteRecord(req.body.id);
      return res(
        ctx.status(200),
        ctx.json({ message: 'Board Update Success!' }),
      );
    } catch (error) {
      return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
    }
  }),
];
