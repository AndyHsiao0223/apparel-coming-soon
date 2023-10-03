import { render, screen } from '@testing-library/react';
import sideImg from './sideImg.jsx';

test('renders learn react link', () => {
  render(<sideImg />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});