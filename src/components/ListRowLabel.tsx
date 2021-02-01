import React from 'react';
import { Box, Text } from 'grommet';
import { Person } from '../store/peopleSlice';

const ListRowLabel = ({ name, height, mass }: Person) => (
  <Box direction="row" margin="medium">
    <Box direction="row" width="large">
      <Text size="large" weight="bold">
        {name}
      </Text>
    </Box>
    <Box direction="row" width="medium">
      <Text size="large">Height: {height}</Text>
    </Box>
    <Box direction="row" width="medium">
      <Text size="large">Mass: {mass}</Text>
    </Box>
  </Box>
);

export default ListRowLabel;
