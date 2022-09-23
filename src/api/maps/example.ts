import { User, UserFromServer } from 'interfaces/User.interface';

const mapUserFromServer = (data: UserFromServer): User => ({
  id: data.id,
  login: data.login,
  name: data.name ?? '',
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

export const exampleMaps = {
  mapUserFromServer,
};
