import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders Loader', () => {
  render(<Loader />);

  expect(screen.getByTestId('loader')).toBeInTheDocument();
});
