import { render, screen } from '@testing-library/react';
import content from './content.jsx';

test('renders learn react link', () => {
  render(<content />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
