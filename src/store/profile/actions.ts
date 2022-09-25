import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { LoginPayload } from 'interfaces/api/profile.interfaces';
import { setAxiosAuthorizationToken } from 'utils/axios';
import storage from 'utils/storage';

export const login = createAsyncThunk<string, LoginPayload, { rejectValue: string }>(
  'LOGIN',
  async (loginData, { rejectWithValue }) => {
    const { data, errorMessage } = await api.auth.login(loginData);

    if (data) {
      const { accessToken } = data;

      storage.setToken(accessToken);

      setAxiosAuthorizationToken(accessToken);

      return accessToken;
    }
    if (errorMessage) {
      return rejectWithValue(errorMessage);
    }
    throw Error();
  },
);

export const setIsLoggedIn = createAction<boolean>('SET_IS_LOGGED_IN');
