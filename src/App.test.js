import { render, screen } from '@testing-library/react';
import App from './App';
import Title from './components/Title/Title';

test('renders learn react link', () => {
  render(<Title />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
