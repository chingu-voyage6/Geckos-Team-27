import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NavBar and Main components', () => {
  render(<App />);

  const navBarElement = screen.getByTestId('nav-bar');
  expect(navBarElement).toBeInTheDocument();

  const mainElement = screen.getByTestId('main');
  expect(mainElement).toBeInTheDocument();
});
