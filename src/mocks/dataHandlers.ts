import { rest } from 'msw';
import memberList from './data/getMemberData.json';
import cardList from './data/getListData.json';

export const dataHandlers = [
  rest.get('/members', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(memberList));
  }),

  rest.get('/list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cardList));
  }),

  rest.post('/list', (req: any, res, ctx) => {
    cardList.push(req.body);
    return res(ctx.status(200), ctx.json(cardList));
  }),
];
