import Axios, { AxiosError } from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { API_URL } from 'constants/config';

import storage from './storage';

const cache = setupCache({
  maxAge: 5 * 1000,
});

const axios = Axios.create({
  baseURL: API_URL,
  adapter: cache.adapter,
});

const setAxiosAuthorizationToken = (token: null | string): void => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

const unauthenticatedRequestInterceptor = (error: AxiosError) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && originalRequest.headers) {
    storage.clearToken();
    delete originalRequest.headers.Authorization;
  }

  return Promise.reject(error);
};

axios.interceptors.response.use((response) => response, unauthenticatedRequestInterceptor);

export { axios, setAxiosAuthorizationToken };
