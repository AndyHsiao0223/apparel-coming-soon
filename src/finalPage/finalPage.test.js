import { render, screen } from '@testing-library/react';
import finalPage from './finalPage.jsx';

test('renders learn react link', () => {
  render(<finalPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});