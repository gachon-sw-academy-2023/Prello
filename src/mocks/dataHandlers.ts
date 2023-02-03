import { rest } from 'msw';
import memberList from './data/getMemberData.json';
import { useIndexedDB } from 'react-indexed-db';

const { getAll, add, deleteRecord, update, getByID, getByIndex } =
  useIndexedDB('card');

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

  rest.post('/list/changeTitle', async (req: any, res, ctx) => {
    const target = await getByID(req.body.cardId);
    update({ title: req.body.title, id: target.id, order: target.order });
    return res(ctx.status(200));
  }),

  rest.post('/list/updateIndex', async (req: any, res, ctx) => {
    const target = await getByIndex('order', req.body.oldIndex);
    deleteRecord(target.id);

    target.order = req.body.newIndex;

    const AllList = await getAll();

    if (req.body.oldIndex < req.body.newIndex) {
      AllList.map((list) => {
        if (list.order <= req.body.newIndex) {
          update({
            title: list.title,
            id: list.id,
            order: Math.max(0, list.order - 1),
          });
        }
      });
    } else {
      AllList.map((list) => {
        if (
          req.body.newIndex <= list.order &&
          list.order <= req.body.oldIndex
        ) {
          update({
            title: list.title,
            id: list.id,
            order: list.order + 1,
          });
        }
      });
    }

    add(target);

    return res(ctx.status(200));
  }),

  rest.post('/list/delete', async (req: any, res, ctx) => {
    deleteRecord(req.body.cardId);
    const list = await getAll();
    return res(ctx.status(200), ctx.json(list));
  }),
];
