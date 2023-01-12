import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '@/App';

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');

  expect(buttonCount.innerHTML).toBe('count is 0');

  await user.click(buttonCount);
  await user.click(buttonCount);
  expect(buttonCount.innerHTML).toBe('count is 2');
});
