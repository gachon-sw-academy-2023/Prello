import { getAllByAltText } from '@testing-library/react';
import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { add } = useIndexedDB('board');

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
];
