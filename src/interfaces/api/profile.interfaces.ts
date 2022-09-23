export interface LoginPayload {
  email: string;
  password: string;
}

export interface PasswordRecoveryPayload {
  token: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginResponseFromServer {
  access_token: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface PasswordRecoveryFormFields extends Omit<PasswordRecoveryPayload, 'token'> {}
export interface GenerateTokenFields {
  email: string;
}

export interface Role {
  slug: string;
  name: string;
}

export interface Country {
  slug: string;
  name: string;
}

export interface UserBase {
  email: string;
  city: string;
  name: string;
  role: Role;
  country: Country;
  comment: string;
}

export interface UserToServer {
  role: string;
  country: string;
  login: string;
  password: string;
  passwordConfirmation: string;
  city: string;
  name: string;
  comment: string;
}

export interface CreateUserToServer extends Omit<UserToServer, 'comment' | 'city'> {}
export interface UpdateUserToServer
  extends Omit<UserToServer, 'comment' | 'city' | 'password' | 'passwordConfirmation'> {}

export interface User extends UserBase {
  id: number;
  login: string;
}
