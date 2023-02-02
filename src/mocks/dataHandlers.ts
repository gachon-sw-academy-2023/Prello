import { rest } from 'msw';
import memberList from './data/getMemberData.json';
import cardList from './data/getListData.json';
import { IndexedDB, useIndexedDB } from 'react-indexed-db';

const { getAll, add, deleteRecord, update } = useIndexedDB('card');

export const dataHandlers = [
  rest.get('/members', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(memberList));
  }),

  rest.get('/list', async (req, res, ctx) => {
    const list = await getAll();
    return res(ctx.status(200), ctx.json(list));
  }),

  rest.post('/list', async (req: any, res, ctx) => {
    add(req.body);
    const list = await getAll();
    return res(ctx.status(200), ctx.json(list));
  }),

  rest.post('/list/changeTitle', (req: any, res, ctx) => {
    update({ title: req.body.title, id: req.body.cardId });
    return res(ctx.status(200));
  }),

  rest.post('/list/delete', async (req: any, res, ctx) => {
    deleteRecord(req.body.cardId);
    const list = await getAll();
    return res(ctx.status(200), ctx.json(list));
  }),
];
