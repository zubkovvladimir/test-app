import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { LoginPayload, PasswordRecoveryPayload, User } from 'interfaces/api/profile.interfaces';
import { ErrorType } from 'interfaces/common.interfaces';
import { setAxiosAuthorizationToken } from 'utils/axios';
import storage from 'utils/storage';

export const login = createAsyncThunk<string, LoginPayload, { rejectValue: ErrorType }>(
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

// export const getProfileInfo = createAsyncThunk<User, void, { rejectValue: ErrorType }>(
//   'GET_PROFILE_INFO',
//   async (_, { rejectWithValue }) => {
//     const { data, errorMessage } = await api.auth.getProfileInfo();

//     if (data) {
//       return data;
//     }
//     if (errorMessage) {
//       return rejectWithValue(errorMessage);
//     }
//     throw Error();
//   },
// );

// export const setInitialProfileState = createAction('SET_INITIAL_PROFILE_STATE');
// export const clearProfileError = createAction('CLEAR_PROFILE_ERROR');
