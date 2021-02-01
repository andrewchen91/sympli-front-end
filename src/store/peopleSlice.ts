import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
  films: string[];
}

export const fetchPeopleByUrl = createAsyncThunk(
  'people/fetchByUrl',
  async (url: string = `https://swapi.dev/api/people/?page=1`) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      return err.response.data;
    }
  }
);

interface PeopleState {
  error: string | null | undefined;
  entities: Person[];
  loading: boolean;
  next?: string;
  previous?: string;
}

const initialState = {
  entities: [],
  error: null,
  loading: false,
} as PeopleState;

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeopleByUrl.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeopleByUrl.fulfilled, (state, { payload }) => {
      state.entities = payload.results;
      state.next = payload.next;
      state.previous = payload.previous;
      state.loading = false;
    });
    builder.addCase(fetchPeopleByUrl.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default peopleSlice;
