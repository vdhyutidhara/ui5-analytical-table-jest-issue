import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const tableElement = screen.getByText("Name");
  screen.debug(tableElement);
  expect(tableElement).toBeInTheDocument();
});
