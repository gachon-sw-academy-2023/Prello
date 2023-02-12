import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '@/pages/authorization/login';

test('Renders login page correctly', async () => {
  render(<Login />);
  const axios = require('axios');
  const emailInput = screen.findByLabelText('Email');
  const pwInput = screen.findByLabelText('Password');
  const signInButton = await screen.findByRole('button');
  const codeCount = screen.queryByText(/The count is now:/);

  expect((await emailInput).innerHTML).toBe('test@gmail.com');
  expect((await pwInput).innerHTML).toBe('qwer1234!');
  expect(buttonCount.innerHTML).toBe('count is 0');
  expect(codeCount).not.toBeInTheDocument();

  await user.click(buttonCount);
  await user.click(buttonCount);
  expect(buttonCount.innerHTML).toBe('count is 2');
  expect(screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
