import { combineReducers } from '@reduxjs/toolkit';

import { booksReducer as books } from './books/reducer';
import { profileReducer as profile } from './profile/reducer';

export const rootReducer = combineReducers({
  profile,
  books,
});

export type RootState = ReturnType<typeof rootReducer>;
