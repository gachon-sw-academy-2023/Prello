// import { rest } from 'msw';
// import memberList from './data/getMemberData.json';
// import { useIndexedDB } from 'react-indexed-db';

// const { getAll, add, deleteRecord, update, getByID, getByIndex } =
//   useIndexedDB('card');

// export const dataHandlers = [
//   rest.get('/members/list', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(memberList));
//   }),

//   rest.get('/card', async (req, res, ctx) => {
//     try {
//       const list = await getAll();
//       return res(ctx.status(200), ctx.json(list));
//     } catch {
//       return res(
//         ctx.status(500),
//         ctx.json({ message: 'Fail to Load the Data' }),
//       );
//     }
//   }),

//   rest.post('/card/create', async (req: any, res, ctx) => {
//     try {
//       add(req.body);
//       const list = await getAll();
//       return res(ctx.status(200), ctx.json(list));
//     } catch {
//       return res(ctx.status(500), ctx.json({ message: 'Store in DB Failed!' }));
//     }
//   }),

//   rest.post('/card/update-title', async (req: any, res, ctx) => {
//     try {
//       const target = await getByID(req.body.cardId);
//       update({ title: req.body.title, id: target.id, order: target.order });
//       return res(ctx.status(200));
//     } catch {
//       return res(ctx.status(500), ctx.json({ message: 'Fail to Update Data' }));
//     }
//   }),

//   rest.post('/card/update-index', async (req: any, res, ctx) => {
//     try {
//       const target = await getByIndex('order', req.body.oldIndex);
//       deleteRecord(target.id);

//       target.order = req.body.newIndex;

//       const AllList = await getAll();

//       if (req.body.oldIndex < req.body.newIndex) {
//         AllList.map((list) => {
//           if (list.order <= req.body.newIndex) {
//             update({
//               title: list.title,
//               id: list.id,
//               order: Math.max(0, list.order - 1),
//             });
//           }
//         });
//       } else {
//         AllList.map((list) => {
//           if (
//             req.body.newIndex <= list.order &&
//             list.order <= req.body.oldIndex
//           ) {
//             update({
//               title: list.title,
//               id: list.id,
//               order: list.order + 1,
//             });
//           }
//         });
//       }

//       add(target);

//       return res(ctx.status(200));
//     } catch {
//       return res(ctx.status(500), ctx.json({ message: 'Fail to Update Data' }));
//     }
//   }),

//   rest.post('/card/delete', async (req: any, res, ctx) => {
//     try {
//       deleteRecord(req.body.cardId);
//       const list = await getAll();
//       return res(ctx.status(200), ctx.json(list));
//     } catch {
//       return res(ctx.status(500), ctx.json({ message: 'Fail to Delete Data' }));
//     }
//   }),
// ];
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
      return res(ctx.status(200), ctx.delay(2000), ctx.json(workspace));
    } catch (error) {
      return res(
        ctx.status(500),
        ctx.delay(2000),
        ctx.json({ message: 'Store in DB Failed!' }),
      );
    }
  }),
];
