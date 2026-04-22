import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile data form title', () => {
  render(<App />);
  const titleElement = screen.getByText(/данные профиля/i);
  expect(titleElement).toBeInTheDocument();
});
