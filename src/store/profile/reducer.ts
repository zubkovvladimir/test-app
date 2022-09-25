import { createReducer } from '@reduxjs/toolkit';
import { login, setIsLoggedIn } from 'store/profile/actions';
import { createBuilder } from 'utils/store';

interface ProfileState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const profileReducer = createReducer(initialState, (builder) => {
  createBuilder(builder)
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;

      if (payload) {
        state.error = payload;
      }
    })
    .addCase(login.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
    })
    .addCase(setIsLoggedIn, (state, { payload }) => {
      state.isLoggedIn = payload;
    });
});
