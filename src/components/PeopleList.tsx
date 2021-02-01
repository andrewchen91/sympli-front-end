import React, { useEffect } from 'react';
import { Accordion, AccordionPanel, Box } from 'grommet';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { RootState } from '../store/rootReducer';
import { fetchPeopleByUrl } from '../store/peopleSlice';
import { fetchFilmByUrls } from '../store/filmSlice';
import ListRowLabel from './ListRowLabel';
import ListRowDetails from './ListRowDetails';
import Loader from './Loader';

const PeopleList = () => {
  const dispatch = useAppDispatch();
  const peopleEntities = useSelector(
    (state: RootState) => state.people.entities
  );
  const loadingPeople = useSelector((state: RootState) => state.people.loading);
  const filmEntities = useSelector((state: RootState) => state.film.entities);
  const loadingFilms = useSelector((state: RootState) => state.film.loading);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        await dispatch(fetchPeopleByUrl());
      } catch {
        console.log('Error fetching people');
      }
    };

    fetchPeople();
  }, [dispatch]);

  const fetchFilmTitles = async (indexes: number[]) => {
    if (!indexes || indexes.length === 0) {
      return;
    }

    try {
      await dispatch(fetchFilmByUrls(peopleEntities[indexes[0]].films || []));
    } catch {
      console.log('Error fetching films');
    }
  };

  const getFilmTitles = (urls: string[]) => {
    const titles: string[] = [];

    urls.map((url) => {
      const title = filmEntities.find((f) => f.url === url)?.title;

      if (title) {
        titles.push(title);
      }
    });

    return titles;
  };

  return (
    <Box align="center">
      {loadingPeople ? (
        <Loader />
      ) : (
        <Box margin="medium" width="xlarge">
          <Accordion alignSelf="stretch" onActive={fetchFilmTitles}>
            {peopleEntities.map((p) => (
              <AccordionPanel key={p.name} label={ListRowLabel(p)}>
                <ListRowDetails
                  person={p}
                  filmTitles={getFilmTitles(p.films || [])}
                  loadingFilms={loadingFilms}
                />
              </AccordionPanel>
            ))}
          </Accordion>
        </Box>
      )}
    </Box>
  );
};

export default PeopleList;
