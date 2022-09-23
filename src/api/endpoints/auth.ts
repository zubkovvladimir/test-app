import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = 'auth/login' as const;

interface Endpoints {
  login: NoParamEndpointConstructor;
}

export const authEndpoints: Endpoints = {
  login: () => base,
};
