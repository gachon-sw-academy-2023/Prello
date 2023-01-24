import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll } = useIndexedDB('user');

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
  rest.post('/sign-up', async (req, res, ctx) => {
    let isExist;
    await getAll().then((users) => {
      console.log(users.find(({ email }) => email === req.body));
      users.find(({ email }) => email === req.body) !== undefined
        ? (isExist = true)
        : (isExist = false);
      console.log(isExist);
    });

    if (isExist) {
      return res(ctx.status(409), ctx.json({ message: 'Registered Email!' }));
    }

    return res(ctx.status(200), ctx.json({ message: 'SignUp Success!' }));
  }),
];
