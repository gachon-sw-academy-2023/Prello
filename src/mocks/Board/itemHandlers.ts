import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
import { json } from 'react-router-dom';
const { getAll, add, deleteRecord, getByIndex, getByID, update, clear } =
  useIndexedDB('item');

export const itemHandlers = [
  rest.get('/item/:itemId', async (req: any, res, ctx) => {
    const target = await getByID(req.params.itemId);

    return res(ctx.status(200), ctx.json(target));
  }),
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

  rest.post('/item/delete', async (req: any, res, ctx) => {
    const target = await getByID(req.body.itemId);
    const cardId = target.cardId;

    await deleteRecord(req.body.itemId);
    const result = (await getAll()).filter((list) => list.cardId == cardId);
    return res(ctx.status(200), ctx.json(result));
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
    target.cardId = req.body.newCardIndex;
    target.order = req.body.newIndex;

    // 같은 카드 내에서 아이템의 위치가 바뀌는 경우
    if (req.body.newCardIndex == req.body.oldCardIndex) {
      const cardList = (await getAll()).filter(
        (list) => list.cardId == req.body.oldCardIndex,
      );
      if (req.body.oldIndex < req.body.newIndex) {
        cardList.map((list) => {
          if (list.order <= req.body.newIndex) {
            update({
              title: list.title,
              id: list.id,
              order: Math.max(0, list.order - 1),
              cardId: list.cardId,
              description: list.description,
              date: list.date,
              members: list.members,
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
              description: list.description,
              date: list.date,
              members: list.members,
            });
          }
        });
      }

      add(target);

      return res(ctx.status(200));
    }
    // 다른 카드로 아이템을 이동시키는 경우
    else {
      const oldList = (await getAll()).filter(
        (list) => list.cardId == req.body.oldCardIndex,
      );

      oldList.map((list) => {
        if (list.order > req.body.oldIndex) {
          update({
            title: list.title,
            id: list.id,
            order: list.order - 1,
            cardId: list.cardId,
            description: list.description,
            date: list.date,
            members: list.members,
          });
        }
      });

      const newList = (await getAll()).filter(
        (list) => list.cardId == req.body.newCardIndex,
      );

      newList.map((list) => {
        if (list.order >= req.body.newIndex) {
          update({
            title: list.title,
            id: list.id,
            order: list.order + 1,
            cardId: list.cardId,
            description: list.description,
            date: list.date,
            members: list.members,
          });
        }
      });
    }

    add(target);
    return res(ctx.status(200));
  }),

  rest.post('/item/:itemId', async (req: any, res, ctx) => {
    await update({
      id: parseInt(req.params.itemId),

      title: req.body.title,
      order: req.body.order,
      cardId: req.body.cardId,
      description: req.body.description,
      date: req.body.date,
      members: req.body.members,
    });

    return res(ctx.status(200));
  }),
];
