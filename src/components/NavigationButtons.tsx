import React from 'react';
import { Box } from 'grommet';
import { LinkNext, LinkPrevious } from 'grommet-icons';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { RootState } from '../store/rootReducer';
import { fetchPeopleByUrl } from '../store/peopleSlice';

const NavigationButtons = () => {
  const dispatch = useAppDispatch();
  const nextUrl = useSelector((state: RootState) => state.people.next);
  const previousUrl = useSelector((state: RootState) => state.people.previous);

  const fetchPeople = async (url: string) => {
    try {
      await dispatch(fetchPeopleByUrl(url));
    } catch {
      console.log('Error fetching people');
    }
  };

  return (
    <Box
      alignSelf="center"
      direction="row"
      margin="medium"
      justify="between"
      width="large"
    >
      {previousUrl ? (
        <Box
          onClick={() => fetchPeople(previousUrl)}
          focusIndicator={false}
          align="center"
        >
          <LinkPrevious size="large" />
          <Box>Previous page</Box>
        </Box>
      ) : (
        <Box />
      )}
      {nextUrl && (
        <Box
          onClick={() => fetchPeople(nextUrl)}
          focusIndicator={false}
          align="center"
        >
          <LinkNext size="large" />
          <Box>Next page</Box>
        </Box>
      )}
    </Box>
  );
};

export default NavigationButtons;
