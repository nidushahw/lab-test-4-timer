import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start time element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start time/i);
  expect(linkElement).toBeInTheDocument();
});
