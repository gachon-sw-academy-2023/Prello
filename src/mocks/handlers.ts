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
  rest.post('/login', async (req, res, ctx) => {
    let password;
    let user;
    await getAll().then((users) => {
      user = users.find(({ email }) => email === req.body.email);
    });

    if (user) {
      if (req.body.password === user.password) {
        return res(ctx.status(200), ctx.json({ message: 'Login Success!' }));
      }
      return res(ctx.status(401), ctx.json({ message: 'Anauthorized' }));
    }

    return res(ctx.status(400), ctx.json({ message: 'Unregistered Account' }));
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
