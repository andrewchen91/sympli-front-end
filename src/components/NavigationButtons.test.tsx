import React from 'react';
import { render, screen } from '../testUtils';
import NavigationButtons from './NavigationButtons';

test('Renders both navigation buttons', () => {
  render(<NavigationButtons />, {
    initialState: { people: { next: 'next url', previous: 'previous url' } },
  });

  expect(screen.getByText(/Next page/i)).toBeInTheDocument();
  expect(screen.getByText(/Previous page/i)).toBeInTheDocument();
});

test('Renders only button for next page', () => {
  render(<NavigationButtons />, {
    initialState: { people: { next: 'next url' } },
  });

  expect(screen.getByText(/Next page/i)).toBeInTheDocument();
  expect(screen.queryByText(/Previous page/i)).not.toBeInTheDocument();
});

test('Renders only button for previous page', () => {
  render(<NavigationButtons />, {
    initialState: { people: { previous: 'previous url' } },
  });

  expect(screen.getByText(/Previous page/i)).toBeInTheDocument();
  expect(screen.queryByText(/Next page/i)).not.toBeInTheDocument();
});

test('Renders no buttons when there are no URLs', () => {
  render(<NavigationButtons />, {
    initialState: { people: {} },
  });

  expect(screen.queryByText(/Next page/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Previous page/i)).not.toBeInTheDocument();
});
