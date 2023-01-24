import { rest } from 'msw';

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          email: 'abc@prello.com',
          pwd: 'test1234',
          nickname: 'pimfy',
        },
      ]),
    );
  }),
  rest.post('/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.cookie('auth-token', 'tokenIsHere'));
  }),
  rest.post('/sign-up', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'signup success!' }));
  }),
];
