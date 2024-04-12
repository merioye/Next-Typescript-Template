import { render, screen } from '@testing-library/react';
import Hello from '@/components/Hello';

test('it should pass', () => {
  render(<Hello />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
  expect(20).toBe(20);
});
