import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add } = useIndexedDB('user');

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
      console.log(users.find(({ email }) => email === req.body.email));
      users.find(({ email }) => email === req.body.email) !== undefined
        ? (isExist = true)
        : (isExist = false);
    });

    if (isExist) {
      return res(ctx.status(409), ctx.json({ message: 'Registered Email!' }));
    } else {
      try {
        await add({ ...req.body });
        return res(ctx.status(200), ctx.json({ message: 'SignUp Success!' }));
      } catch (error) {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Store in DB Failed!' }),
        );
      }
    }
  }),
  rest.post('/workspace/create', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: '워크스페이스 생성 완료' }),
    );
  }),
];
