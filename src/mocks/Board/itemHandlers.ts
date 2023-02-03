import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add, deleteRecord, getByIndex, getByID, update } =
  useIndexedDB('item');

export const itemHandlers = [
  rest.get('/list/item/:cardId', async (req, res, ctx) => {
    const AllList = await getAll();
    const itemList = AllList.filter(
      (list: any) => list.cardId == req.params.cardId,
    );
    return res(ctx.status(200), ctx.json(itemList));
  }),
  rest.post('/item/create', async (req: any, res, ctx) => {
    add(req.body);
    const AllList = await getAll();
    const targetList = AllList.filter(
      (list) => list.cardId === req.body.cardId,
    );
    return res(ctx.status(200), ctx.json(targetList));
  }),

  rest.post('/item/clear', async (req: any, res, ctx) => {
    const AllList = await getAll();
    const target = await getByIndex('cardId', req.body.cardId);

    AllList.map((list) => {
      if (list.cardId == target.cardId) {
        deleteRecord(list.id);
      }
    });

    return res(ctx.status(200), ctx.json(AllList));
  }),

  rest.post('/item/update-card-index', async (req: any, res, ctx) => {
    const target = await getByID(req.body.id);

    update({
      title: target.title,
      id: target.id,
      order: target.order,
      cardId: req.body.newIndex,
    });

    return res(ctx.status(200));
  }),
];
