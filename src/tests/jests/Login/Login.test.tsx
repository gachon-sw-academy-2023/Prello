import Login from '@/pages/authorization/login';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

describe('SignUp Test', () => {
  it('Rendering Test', () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Login></Login>
        </RecoilRoot>
      </BrowserRouter>,
    );

    const email = screen.getByTestId('email');
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute('placeholder', 'Type here');

    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
    expect(password).toHaveAttribute('placeholder', 'Type here');

    const submit = screen.getByTestId('submit');
    expect(submit).toBeInTheDocument();
  });

  it('Input Test', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <RecoilRoot>
          <Login></Login>
        </RecoilRoot>
      </BrowserRouter>,
    );

    const email = screen.getByTestId('email');
    await user.type(email, 'test@gmail.com');
    expect((email as HTMLInputElement).value).toBe('test@gmail.com');

    const password = screen.getByTestId('password');
    await user.type(password, 'Qwer1234!');
    expect((password as HTMLInputElement).value).toBe('Qwer1234!');
  });

  it('Button Enable/Disable Test', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <RecoilRoot>
          <Login></Login>
        </RecoilRoot>
      </BrowserRouter>,
    );

    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');
    const submit = screen.getByTestId('submit');

    // expect(submit).toBeDisabled();

    await user.type(email, 'test@gmail.com');
    await user.type(password, 'Qwer1234!');

    expect(submit).toBeEnabled();
  });

  it('Button Click Test', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <RecoilRoot>
          <Login></Login>
        </RecoilRoot>
      </BrowserRouter>,
    );

    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');
    const submit = screen.getByTestId('submit');

    await user.type(email, 'test@gmail.com');
    await user.type(password, 'Qwer1234!');

    user.click(submit);
  });
});
