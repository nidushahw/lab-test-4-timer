import { render, screen } from '@testing-library/react';
import App from './App';

// Completing the requirements for lab 5
test('renders start time element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start time/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders stop time element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stop time/i);
  expect(linkElement).toBeInTheDocument();
});
