import { render, screen } from '@testing-library/react';
import App from './App';

test('renders analytical table', () => {
  render(<App />);
  const tableElement = screen.getByText("Name");
  screen.debug(tableElement);
  expect(tableElement).toBeInTheDocument();
});
