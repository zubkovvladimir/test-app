import { createReducer } from '@reduxjs/toolkit';
import { User } from 'interfaces/api/profile.interfaces';
import { ErrorType } from 'interfaces/common.interfaces';
import { login, setIsLoggedIn } from 'store/profile/actions';
import { createBuilder } from 'utils/store';

interface ProfileState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: ErrorType | null;
  info: User | null;
  isLinkSended: boolean;
}

const initialState: ProfileState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  info: null,
  isLinkSended: false,
};

export const profileReducer = createReducer(initialState, (builder) => {
  createBuilder(builder)
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload as ErrorType;
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
