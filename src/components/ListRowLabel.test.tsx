import { render, screen } from '@testing-library/react';
import ListRowLabel from './ListRowLabel';

test('renders ListRowLabel with all data', () => {
  const person = {
    name: 'Luke Skywalker',
    height: '180',
    mass: '80',
    birth_year: '',
    gender: '',
    films: [],
  };

  render(ListRowLabel(person));

  expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  expect(screen.getByText(/Height: 180/i)).toBeInTheDocument();
  expect(screen.getByText(/Mass: 80/i)).toBeInTheDocument();
});
