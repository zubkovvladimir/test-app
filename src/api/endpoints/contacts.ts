import { UniqueId } from 'interfaces/common.interfaces';
import { NoParamEndpointConstructor, SingleParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = '/speakers' as const;

interface Endpoints {
  list: NoParamEndpointConstructor;
  create: NoParamEndpointConstructor;
  update: SingleParamEndpointConstructor<UniqueId>;
  delete: SingleParamEndpointConstructor<UniqueId>;
}

export const contactsEndpoints: Endpoints = {
  list: () => base,
  create: () => base,
  update: (id) => `${base}/${id}`,
  delete: (id) => `${base}/${id}`,
};
