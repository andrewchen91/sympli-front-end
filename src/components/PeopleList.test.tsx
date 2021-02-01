import React from 'react';
import { render, screen } from '../testUtils';
import PeopleList from './PeopleList';

test('Renders both navigation buttons', () => {
  render(<PeopleList />, {
    initialState: {
      people: {
        entities: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',

            birth_year: '19BBY',
            gender: 'male',
            films: [
              'http://swapi.dev/api/films/1/',
              'http://swapi.dev/api/films/2/',
              'http://swapi.dev/api/films/3/',
              'http://swapi.dev/api/films/6/',
            ],
            url: 'http://swapi.dev/api/people/1/',
          },
          {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            birth_year: '112BBY',
            gender: 'n/a',
            films: [
              'http://swapi.dev/api/films/1/',
              'http://swapi.dev/api/films/2/',
              'http://swapi.dev/api/films/3/',
              'http://swapi.dev/api/films/4/',
              'http://swapi.dev/api/films/5/',
              'http://swapi.dev/api/films/6/',
            ],
            url: 'http://swapi.dev/api/people/2/',
          },
          {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            birth_year: '33BBY',
            gender: 'n/a',
            films: [
              'http://swapi.dev/api/films/1/',
              'http://swapi.dev/api/films/2/',
              'http://swapi.dev/api/films/3/',
              'http://swapi.dev/api/films/4/',
              'http://swapi.dev/api/films/5/',
              'http://swapi.dev/api/films/6/',
            ],
            url: 'http://swapi.dev/api/people/3/',
          },
        ],
      },
      film: { entities: [] },
    },
  });

  expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  expect(screen.getByText(/C-3PO/i)).toBeInTheDocument();
  expect(screen.getByText(/R2-D2/i)).toBeInTheDocument();
});
