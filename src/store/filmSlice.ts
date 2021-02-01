import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

export interface Film {
  title: string;
  episode_id: number;
  url: string;
}

export const fetchFilmByUrls = createAsyncThunk<
  Film[],
  string[],
  {
    state: RootState;
  }
>('film/fetchByUrls', async (urls: string[], thunkAPI) => {
  const requestUrls: string[] = [];
  const currentFilms = thunkAPI.getState().film.entities;

  // find films that do not yet exist in the state
  urls.map((url) => {
    if (!currentFilms.find((f) => f.url === url)) {
      requestUrls.push(url);
    }
  });

  try {
    // fetch data for all new films
    const fetchRequests: Promise<Response>[] = [];
    requestUrls.map((f) => fetchRequests.push(fetch(f)));
    const fetchResponses = await Promise.all(fetchRequests);
    return await Promise.all(fetchResponses.map((r) => r.json()));
  } catch (err) {
    return err.response.data;
  }
});

interface FilmState {
  error: string | null | undefined;
  entities: Film[];
  loading: boolean;
}

const initialState = {
  entities: [],
  error: null,
  loading: false,
} as FilmState;

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmByUrls.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilmByUrls.fulfilled, (state, { payload }) => {
      state.entities = state.entities.concat(payload);
      state.loading = false;
    });
    builder.addCase(fetchFilmByUrls.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default filmSlice;
