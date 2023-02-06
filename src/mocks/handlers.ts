import { IJUser, IUser } from '@/utils/types';
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

  rest.post('/login', async (req, res, ctx) => {
    const { email, password } = await req.json<IUser>();

    let user: IUser = {
      email: '',
      password: '',
    };

    await getAll().then((users) => {
      user = users.find((u) => u.email === email);
    });

    if (user) {
      if (user.password === password) {
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

  rest.post('/sign-up', async (req, res, ctx) => {
    const { email, password, nickname } = await req.json<IJUser>();
    console.log(email, password);

    let isExist;

    await getAll().then((users) => {
      users.find((u) => u.email === email) !== undefined
        ? (isExist = true)
        : (isExist = false);
    });

    if (isExist) {
      return res(ctx.status(409), ctx.json({ message: 'Registered Email!' }));
    } else {
      try {
        await add({
          email: email,
          password: password,
          nickname: nickname,
        });
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
