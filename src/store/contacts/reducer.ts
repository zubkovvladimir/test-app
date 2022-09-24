import { createReducer } from '@reduxjs/toolkit';
import { defaultPageMeta } from 'constants/other';
import { Contact } from 'interfaces/api/contacts.interface';
import { PageMeta } from 'interfaces/api/response.interfaces';

import { fetchContacts } from './actions';

interface ContactState {
  isLoading: boolean;
  items: Contact[];
  meta: PageMeta;
  error: string | null;
  current: Contact | null;
}

const initialState: ContactState = {
  isLoading: false,
  items: [],
  meta: defaultPageMeta,
  error: null,
  current: null,
};

export const contactssReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    })
    .addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    });
});
