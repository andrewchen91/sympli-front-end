import React from 'react';
import { Box, Text } from 'grommet';
import { Person } from '../store/peopleSlice';
import Loader from './Loader';

const ListRowDetails = ({
  person,
  filmTitles,
  loadingFilms,
}: {
  person: Person;
  filmTitles: string[];
  loadingFilms: boolean;
}) => {
  return loadingFilms ? (
    <Loader />
  ) : (
    <Box background="#282c34">
      <Box direction="row" margin="medium">
        <Box direction="column" width="large">
          <Text size="medium">Name: {person.name}</Text>
          <Text size="medium">Height: {person.height}</Text>
          <Text size="medium">Birth year: {person.birth_year}</Text>
          <Text size="medium">Gender: {person.gender}</Text>
        </Box>
        <Box width="large">
          <Text size="medium">Films:</Text>
          {filmTitles.map((title) => (
            <Text key={title} size="small">
              {title}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListRowDetails;
