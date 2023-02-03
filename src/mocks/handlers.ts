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

  rest.post('/login', async (req: any, res, ctx) => {
    let user;
    await getAll().then((users) => {
      user = users.find(({ email }) => email === req.body.email);
    });

    if (user) {
      if (req.body.password === user.password) {
        return res(ctx.status(200), ctx.delay(2000), ctx.json({ user }));
      }
      return res(
        ctx.status(401),
        ctx.delay(2000),
        ctx.json({ message: 'Anauthorized' }),
      );
    }
    return res(
      ctx.status(400),
      ctx.delay(2000),
      ctx.json({ message: 'Unregistered Account' }),
    );
  }),

  rest.post('/sign-up', async (req: any, res, ctx) => {
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
];
