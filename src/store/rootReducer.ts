import { combineReducers } from '@reduxjs/toolkit';

import { contactssReducer as contacts } from './contacts/reducer';
import { profileReducer as profile } from './profile/reducer';

export const rootReducer = combineReducers({
  profile,
  contacts,
});

export type RootState = ReturnType<typeof rootReducer>;
