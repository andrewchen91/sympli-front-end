import { render, screen } from '@testing-library/react';
import ListRowDetails from './ListRowDetails';

test('render loader when loadingFilms is true', () => {
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
    films: ['/1', '/2', '/3', '/6'],
  };

  const filmTitles: string[] = [];

  render(
    <ListRowDetails
      person={person}
      filmTitles={filmTitles}
      loadingFilms={true}
    />
  );

  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders ListRowLabel with all data', () => {
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
    films: ['/1', '/2', '/3', '/6'],
  };

  const filmTitles = [
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'Revenge of the Sith',
  ];

  render(
    <ListRowDetails
      person={person}
      filmTitles={filmTitles}
      loadingFilms={false}
    />
  );

  expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
  expect(screen.getByText(/Birth year: 19BBY/i)).toBeInTheDocument();
  expect(screen.getByText(/Gender: male/i)).toBeInTheDocument();
  expect(screen.getByText(/Films:/i)).toBeInTheDocument();
  expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
  expect(screen.getByText(/The Empire Strikes Back/i)).toBeInTheDocument();
  expect(screen.getByText(/Return of the Jedi/i)).toBeInTheDocument();
  expect(screen.getByText(/Revenge of the Sith/i)).toBeInTheDocument();
});
