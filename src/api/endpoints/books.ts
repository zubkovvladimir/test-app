import { UniqueId } from 'interfaces/common.interfaces';
import { NoParamEndpointConstructor, SingleParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = '/posts' as const;

interface Endpoints {
  list: NoParamEndpointConstructor;
  create: NoParamEndpointConstructor;
  update: SingleParamEndpointConstructor<UniqueId>;
  delete: SingleParamEndpointConstructor<UniqueId>;
}

export const booksEndpoints: Endpoints = {
  list: () => base,
  create: () => base,
  update: (id) => `${base}/${id}`,
  delete: (id) => `${base}/${id}`,
};
