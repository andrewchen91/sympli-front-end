import { combineReducers } from '@reduxjs/toolkit';
import peopleSlice from './peopleSlice';
import filmSlice from './filmSlice';

const rootReducer = combineReducers({
  people: peopleSlice.reducer,
  film: filmSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
