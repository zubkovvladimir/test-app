import { createReducer } from '@reduxjs/toolkit';
import { defaultPageMeta } from 'constants/other';
import { Book } from 'interfaces/api/books.interface';
import { PageMeta } from 'interfaces/api/response.interfaces';

import { fetchBooks } from './actions';

interface BooksState {
  isLoading: boolean;
  items: Book[];
  meta: PageMeta;
  error: string | null;
  current: Book | null;
}

const initialState: BooksState = {
  isLoading: false,
  items: [],
  meta: defaultPageMeta,
  error: null,
  current: null,
};

export const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBooks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    })
    .addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    });
});
