import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // arrange
  render(<App />);

  // test
  const linkElement = screen.getByText(/bonjour/i);

  // act
  expect(linkElement).toBeInTheDocument();
});
