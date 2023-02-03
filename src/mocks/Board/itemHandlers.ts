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

  rest.post('/item/update-index', async (req: any, res, ctx) => {
    const target = await getByID(req.body.id);
    deleteRecord(target.id);
    target.order = req.body.newIndex;
    target.cardId = req.body.newCardIndex;

    const cardList = (await getAll()).filter(
      (list) => list.cardId == req.body.oldCardIndex,
    );

    if (req.body.newCardIndex == req.body.oldCardIndex) {
      cardList.map((list) => {
        if (list.order <= req.body.newIndex) {
          update({
            title: list.title,
            id: list.id,
            order: Math.max(0, list.order - 1),
            cardId: list.cardId,
          });
        }
      });
    } else {
      cardList.map((list) => {
        if (
          req.body.newIndex <= list.order &&
          list.order <= req.body.oldIndex
        ) {
          update({
            title: list.title,
            id: list.id,
            order: list.order + 1,
            cardId: list.cardId,
          });
        }
      });
    }

    add(target);

    const result = (await getAll()).filter(
      (list) => list.cardId == req.body.oldCardIndex,
    );

    return res(ctx.status(200), ctx.json(result));
  }),
];
